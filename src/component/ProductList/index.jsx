import React, { useEffect, useState } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateState, stateFalse, statecheck, updateId } from '../../redux/actions';
import ProducForm from '../Product';
import OutsideClickHandler from '../../common/OutsideClick';

const ProductList = () => {
    const dispatch = useDispatch()
    const [Data, setData] = useState()
    const [keyId, setkeyId] = useState()
    const [TabActive, setTabActive] = useState();
    const { ProductList } = useSelector((state) => {
        return {
            ProductList: state.ProductReducer.product.data
        }
    })

    const closeDropdown = () => {
        setTabActive(false);
    };
    const HandleTab = (e) => {
        setTabActive(e)
    }
    useEffect(() => {
        setData(ProductList)
    }, [ProductList])

    const [dataUpdate, setDataUpdate] = useState()
    const [isEdit, setEdit] = useState(false)

    const HandleUpdate = (item, key) => {
        setDataUpdate(item)
        setEdit(true);
        setkeyId(key)

    }
    const HandleDelete = (item) => {
        let result = Data.filter((elm) => elm != item)
        setData(result)
    }

    useEffect(() => {
        dispatch(stateFalse(setEdit))
    }, [setEdit])

    useEffect(() => {
        dispatch(statecheck(isEdit))
    }, [isEdit])

    useEffect(() => {
        dispatch(updateId(keyId))
    }, [keyId])

    useEffect(() => {
        dispatch(UpdateState(dataUpdate))
    }, [dataUpdate])

    console.log(Data, "Data")
    return (
        <div className='Productlist_main'>

            <table className='table_main'>
                <thead className='table_header'>
                    <tr>
                        <th>IMAGE</th>
                        <th>PRODUCT</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {
                        Data && Data.length > 0 ?
                            Data.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td className='Image_wrap_main'>
                                            <figure className='Image_wrap'>
                                                <img src={item.image} alt="product-img" />
                                            </figure>
                                        </td>
                                        <td><p>{item.product}</p></td>
                                        <td><p>{item.category}</p></td>
                                        <td><p>{item.price}</p></td>
                                        <td><button>{item.status}</button></td>
                                        <td className='tripple_dot' onClick={() => HandleTab(key)}>
                                            <div>
                                                <span>&#9679;</span>
                                                <span>&#9679;</span>
                                                <span>&#9679;</span>
                                            </div>
                                            {TabActive === key &&
                                                <OutsideClickHandler onOutsideClick={closeDropdown}>
                                                    <div className="tab_wrap">
                                                        <p onClick={() => HandleUpdate(item, key)}>Edit</p>
                                                        <p onClick={() => HandleDelete(item)}>Delete</p>
                                                    </div>
                                                </OutsideClickHandler>
                                            }
                                        </td>
                                    </tr>
                                )
                            }) : <tr><td className='product_not_found' colSpan={6}>No Product</td></tr>
                    }
                </tbody>
            </table>
            <ProducForm />
        </div>
    )
}

export default ProductList;