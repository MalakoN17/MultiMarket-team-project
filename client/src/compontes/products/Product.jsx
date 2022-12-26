import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/cart/cartSlice';
import PopOutProduct from '../products/PopOutProduct';
// MUI
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Product({ product }) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);

    const [item, setItem] = useState({
        storeId: product.storeId, storeName: product.storeName, product: {
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.image.url,
            quantity: quantity,
            description: product.description,
            barcode: product.barcode
        }
    })

    const handleClick = () => {
        setShow(!show)
    }

    const exitForm = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg max-w-sm dark:border-gray-700 scale-90 transition duration-300 m-auto hover:scale-100 transform">

                    <div onClick={() => { handleClick() }}>
                        <div  className="rounded p-4">
                            <img className="h-36 rounded-md scale-90 transition duration-300 m-auto hover:scale-100 transform" src={product.image.url} alt="product image" />
                        </div>

                        <div className='px-4 pb-5'>
                            <h3 className="text-gray-900 font-semibold text-2xl tracking-tight dark:text-dark mb-2">{product.name}</h3>
                            <p className="truncate font-thin text-md tracking-tight dark:text-gray-900 my-2">{product.description}</p>
                            <div className='flex justify-center px-20'>
                                <ControlPointIcon className='scale-90 transition duration-300 m-auto hover:scale-110 transform' onClick={() => setQuantity((prevue) => { return prevue + 1 })} />
                                <span className="font-normal text-lg tracking-tight dark:text-dark mx-2">{quantity}</span>
                                <RemoveCircleOutlineIcon className='scale-90 transition duration-300 m-auto hover:scale-110 transform' onClick={() => {
                                    if (quantity === 1) {
                                        return;
                                    }
                                    setQuantity((prevue) => { return prevue - 1 })
                                }} />
                            </div>
                        </div>
                    </div>

                    <div className="px-3 pb-5">
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-dark">₪{product.price}</span>
                            <button type="button" onClick={() => dispatch(addProduct(item))} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 scale-90 transition duration-300 hover:scale-100 transform">הוסף מוצר<ShoppingCartIcon /></button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Product PopOut */}
            <div className={show ? 'block' : 'hidden'}>
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex justify-center mt-12 p-4 text-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="">
                                        <div className=" flex h-12 w-12 flex-shrink-0 justify-center rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10 scale-90 transition duration-300 hover:scale-100 transform">
                                            <button onClick={exitForm}>
                                                <CloseIcon />
                                            </button>
                                        </div>

                                        <PopOutProduct product={product} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product