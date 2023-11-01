import React, { useEffect, useState } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, ProductState, UpdateState, stateFalse, statecheck, updateId } from '../../redux/actions';
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

    console.log("ProductList....", ProductList);
    const closeDropdown = () => {
        setTabActive(false);
    };
    const HandleTab = (e) => {
        setTabActive(e)
    }
    useEffect(() => {
        setData(ProductList)
    }, [ProductList])

    const HandleUpdate = (item) => {
        dispatch(UpdateState(item))

    }
    const HandleDelete = (item) => {
        dispatch(DeleteProduct(item))

    }

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
                                                <div className="tab_wrap">
                                                    <OutsideClickHandler onOutsideClick={closeDropdown}>
                                                        <p onClick={() => HandleUpdate(item)}>Edit</p>
                                                        <p onClick={() => HandleDelete(item)}>Delete</p>
                                                    </OutsideClickHandler>
                                                </div>
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