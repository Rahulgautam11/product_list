import React, { useEffect, useState } from 'react'
import FormInput from '../../common/FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { ProductState } from '../../redux/actions'
import './style.scss'
import TextArea from '../../common/TextArea'
import Dropdown from '../DropDown'

const ProducForm = () => {

    let data =
    {
        image: "",
        product: "",
        category: "",
        price: "",
        status: "",
        slug: "",
        tittle: "",
        description: ""
    }

    const dispatch = useDispatch()
    const [storedata, setstoredata] = useState([])
    const [inputValue, setInputValue] = useState(data)

    const { Updatevalue, _id, isCheck, isfalse } = useSelector((state) => {
        return {
            Updatevalue: state.ProductReducer.product.data,
            _id: state.ProductReducer.updateId,
            isCheck: state.ProductReducer.condition,
            isfalse: state.ProductReducer.conditionfalse
        }
    })


    useEffect(() => {
        if (isCheck) {
            setInputValue(Updatevalue)
        }
    }, [Updatevalue])

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setInputValue({ ...inputValue, image: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const HandleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const handleActive = (e) => {
        let value = e.target.value
        setInputValue({ ...inputValue, status: value });
    }
    const HandleInactive = (e) => {
        let value = e.target.value
        setInputValue({ ...inputValue, status: value });
    }

    const Handlesubmit = () => {
        if (inputValue.product === "" || inputValue.category === "" || inputValue.product === "" || inputValue.price === "" || inputValue.status === "") {
            alert("invalid request")
        } else {
            setstoredata(pre => [...pre, inputValue])
            setInputValue(data)

        }

    }

    const handleUpdate = () => {
        isfalse(false)
        storedata.splice(_id, 1,
            {
                image: inputValue.image,
                product: inputValue.product,
                category: inputValue.category,
                price: inputValue.price,
                status: inputValue.status,
                slug: inputValue.slug,
                tittle: inputValue.tittle,
                description: inputValue.description,

            }
        )

        dispatch(ProductState(storedata))
        setInputValue(data)

    }


    useEffect(() => {
        dispatch(ProductState(storedata))
    }, [storedata])

    const categorydata = [
        'Casual',
        'Formal',
        'Sports'
    ];
    return (
        <div className='product_form_container'>
            <div className="product_sub_container">
                <div className="product_left_form">
                    <div className="information_pannel">
                        <input type="file" accept="image/*" onChange={handleImageUpload} />

                        <FormInput
                            label={"Name"}
                            placeholder={"product Name"}
                            name="product"
                            onChange={HandleInput}
                            value={inputValue.product}
                        />

                        <FormInput
                            type={"number"}
                            label={"Name"}
                            placeholder={"product Price"}
                            name="price"
                            onChange={HandleInput}
                            value={inputValue.price}
                        />
                        <FormInput
                            label={"Slug"}
                            placeholder={"product Slug"}
                            name="slug"
                            onChange={HandleInput}
                            value={inputValue.slug}
                        />
                        <FormInput
                            label={"Tittle"}
                            placeholder={"product Tittle"}
                            name="tittle"
                            onChange={HandleInput}
                            value={inputValue.tittle}
                        />
                        <TextArea
                            rows={2}
                            label={"Description"}
                            placeholder={"product Description"}
                            name="description"
                            onChange={HandleInput}
                            value={inputValue.description}
                        />

                    </div>
                </div>
                <div className="product_right_form">
                    <div className="visibility_wrap">
                        <h3 className='wrap_Heading'>Visibility</h3>
                        <div className="label_wrap">
                            <label htmlFor="radiofirst">
                                <input name='btn' id='radiofirst' checked={inputValue.status == "Active"} value={'Active'} type="radio" onChange={handleActive} />
                                Active
                            </label>
                            <label htmlFor="radioSecond" >
                                <input name='btn' id='radioSecond' checked={inputValue.status == "Inactive"} value={"Inactive"} type="radio" onChange={HandleInactive} />
                                Inactive
                            </label>
                        </div>
                    </div>
                    <div className="visibility_wrap">
                        <h3 className='wrap_Heading'>Category</h3>
                        <Dropdown inputValue={inputValue} setInputValue={setInputValue} options={categorydata} />
                    </div>
                </div>
            </div>
            <div className="button_wrap">
                {
                    isCheck ?
                        <button onClick={() => handleUpdate()}>update</button> :
                        <button onClick={() => Handlesubmit()}>Submit</button>
                }
            </div>
        </div>
    )
}

export default ProducForm