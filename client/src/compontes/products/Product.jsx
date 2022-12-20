import React from 'react'
import onion from '../../assets/images/products_images/onions.jpg';

export default function Product() {
    return (
        <>

            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={onion} alt="product image" />
                </a>

                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight ">בצל טרי</h5>
                        <h5 className="">קצת על המוצר</h5>

                    </a>

                    <div className="flex gap-1">
                        <p>2</p>
                        <span className="add-btn">+</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900"> סה"כ: 55 </span>
                    </div>
                </div>


            </div>
        </>
    )
}
