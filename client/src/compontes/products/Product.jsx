import React from 'react'
import onion from '../../assets/images/products_images/onions.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Product() {
    return (
        <>

            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">

                    <div className="rounded p-4">
                        <img className="rounded-md" src={onion} alt="product image" />
                    </div>

                    <div className="px-5 pb-5">
                        <div className='pb-3'>
                            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">ראש בצל נגטו</h3>
                            <p className="font-thin text-md tracking-tight dark:text-gray-400"> קצת על המוצר</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₪58</span>
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">הוסף מוצר לעגלה <ShoppingCartIcon/></button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
