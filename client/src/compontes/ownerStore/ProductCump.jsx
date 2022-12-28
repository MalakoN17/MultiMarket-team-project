import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProductStore, removeProduct } from '../../features/ownerStore/ownerStoreSlice'

export default function ProductCump({product}) {
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const handleUpdateBtn = (e)=>{
        navigate(`/ownerstore/updateproduct/${product._id}`)
    }
    const handleDeleteBtn = ()=>{
      dispatch(removeProduct(product))
      dispatch(deleteProductStore(product))
    }
  return (

    <div className=" ">
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
                <button type="button" onClick={handleDeleteBtn} className="text-white bg-gradient-to-r from-cyan-500 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 scale-90 transition duration-300 hover:scale-100 transform w-full">מחיקת מוצר</button>
              
            </div>
        </div>

{/* //    <div class="flex justify-center md:w-1/4 w-full my-3">
//   <div class="rounded-lg shadow-lg bg-white max-w-sm p-2">
//       <img class="rounded-t-lg h-52 w-[21rem] " src={product.image.url} alt={product.name}/>
    
//     <div class="p-6">
//       <h5 class="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
//       <p class="text-gray-700 text-base mb-4">
//       <p className="text-gray-600">כשרות {product.kosherType}</p>
//       <hr />
//         <p className="text-gray-600">כמות מוצר:  {product.productStock}</p>
//       <hr />
//         <p className="text-gray-600">כמות מחירות מוצר: {product.salesQuantity}</p>
//       <hr />
//         <p className="text-gray-600"> ברקוד: {product.barcode}</p>
//       <hr />
//         <p className="text-gray-600">יצרן: {product.manufacturer}</p>
//       <hr />
//       </p>
//       <button type="button" onClick={handleUpdateBtn} class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">עידכון מוצר</button>
//       <button type="button" onClick={handleDeleteBtn} class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">מחיקת מוצר</button>

//     </div>
</div>
</div> */}
</div>
</div>
  )
}
