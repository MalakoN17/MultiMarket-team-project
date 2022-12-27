import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/cart/cartSlice';
// MUI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useEffect } from 'react';

function Product(props) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false)

    const [item, setItem] = useState({
        storeId: props.product.storeId, storeName: props.product.storeName, product: {
            id: props.product._id,
            name: props.product.name,
            price: props.product.price,
            image: props.product.image.url,
            quantity: quantity,
            description: props.product.description,
            barcode: props.product.barcode
        }
    })

    const handleClick = () => {
        props.callback(show)
        item.product.quantity = quantity
        item.sum = item.product.price * quantity
        console.log(item);
        dispatch(addProduct(item))
    }

    return (
        <>
            <div className="bg-white rounded-lg max-w-sm   ">

                <div className="rounded p-4">
                    <img className="h-36 rounded-md scale-90 transition duration-300 m-auto hover:scale-100 transform" src={props.product.image.url} alt="product image" />
                </div>

                <div className="pb-5">
                    <div className='pb-4'>
                        <h3 className="text-gray-900 font-semibold text-2xl tracking-tight dark:text-dark mb-2 text-right">{props.product.name}</h3>
                        <p className="text-right font-thin text-md tracking-tight dark:text-gray-900 my-2">{props.product.description}</p>
                        <div className='flex justify-around px-32 pt-3'>
                            <ControlPointIcon className='scale-125 transition duration-300 m-auto hover:scale-150 transform' onClick={() => setQuantity((prevue) => { return prevue + 1 })} />
                            <span className="font-normal text-xl tracking-tight dark:text-dark mx-2">{quantity}</span>
                            <RemoveCircleOutlineIcon className='scale-125 transition duration-300 m-auto hover:scale-150 transform' onClick={() => {
                                if (quantity === 1) {
                                    return;
                                }
                                setQuantity((prevue) => { return prevue - 1 })
                            }} />
                        </div>
                    </div> 

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-dark">₪{props.product.price}</span>
                        <button type="button"  onClick={() => handleClick()} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 scale-90 transition duration-300 hover:scale-100 transform">הוסף מוצר<ShoppingCartIcon /></button>
                        {/* <button onClick={()=>{handleClick()}}>fakfdj</button> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product