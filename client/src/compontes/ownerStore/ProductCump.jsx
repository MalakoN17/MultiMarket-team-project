import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCump({product}) {
    const navigate=useNavigate()
    const handleUpdateBtn = (e)=>{
        navigate(`/ownerstore/updateproduct/${product._id}`)
    }
  return (
    <div className="max-w-2xl mx-auto">
    <div className="bg-white shadow-xl rounded-lg max-w-sm dark:border-gray-700 scale-90 transition duration-300 m-auto hover:scale-100 transform">

        <div className="rounded p-4">
            <img className="h-36 rounded-md scale-90 transition duration-300 m-auto hover:scale-100 transform" src={product.image.url} alt="product image" />
        </div>

        <div className="px-5 pb-5">
            <div className=''>
                <h3 className="text-gray-900 font-semibold text-2xl tracking-tight dark:text-dark mb-2"> שם: {product.name}</h3>
                <p className="truncate font-thin text-md tracking-tight dark:text-gray-800 my-2">{product.description}</p>
            </div>
            <div className=''>
                <p className="truncate font-thin text-md tracking-tight dark:text-gray-800 my-2">יצרן: {product.manufacturer}</p>
            </div>
            <div className=''>
                <p className="truncate font-thin text-md tracking-tight dark:text-gray-800 my-2">מכירות: {product.salesQuantity}</p>
            </div>
            <div className=''>
                <p className="truncate font-thin text-md tracking-tight dark:text-gray-800 my-2"> כמות מהמוצר: {product.productStock}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-dark">₪{product.price}</span>
            </div>
            <div className='flex justify-center items-center'>

                <button type="button" onClick={handleUpdateBtn} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 scale-90 transition duration-300 hover:scale-100 transform w-full">עדכן מוצר</button>
            </div>
        </div>

    </div>
</div>
  )
}
