import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { settingProduct } from '../../features/product/produceSlice';


export default function FormProductOne() {
    const item = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ barcode: '', image: '', name: '', price: 0, priority: 0, sectionId: '', productStock: '', description: '', storeId: '', manufacturer: '' });
    const { barcode, image, name, price, priority, sectionId, productStock, description, storeId, manufacturer } = product;
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    useEffect(() => {
        if (item) {
            setProduct(item)
        }
    }, [])


    const handleForm = (e) => {
        e.preventDefault()

        dispatch(settingProduct(product))
        navigate('/addproduct/formproducttwo')
    }

    return (
        <div >

            <div className="flex items-center justify-center p-12">
                {/* Author: FormBold Team */}
                {/* Learn More: https://formbold.com */}
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className="py-6 px-2" onSubmit={handleForm}>
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                :שם המוצר
                            </label>
                            <input onChange={handleInput} type="name" name="name" id="name" placeholder="לדוגמא: עגבניות שרי" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D] text-right">
                                :תמונת המוצר
                            </label>
                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            זרוק קובץ פה
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            או
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                            העלה קובץ
                                        </span>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div className="flex items-center justify-between">
                                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                        banner-design.png
                                    </span>
                                    <button className="text-[#07074D]">
                                        <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                :מחיר המוצר
                            </label>
                            <input onChange={handleInput} name="price" type="number" placeholder="הכנס מחיר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="barcode" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                :ברקוד המוצר
                            </label>
                            <input onChange={handleInput} name="barcode" type="text" placeholder="הכנס ברקוד" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="priority" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                :עדיפות המוצר
                            </label>
                            <input onChange={handleInput} name="" type="text" placeholder="הכנס עדיפות מוצר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                :תיאור מוצר
                            </label>
                            <input onChange={handleInput} name="description" type="" placeholder="הכנס תיאור מוצר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" />
                        </div>




                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                המשך לשלב הבא
                            </button>
                        </div>
                    </form>
                </div>
            </div>





            <form onSubmit={handleForm} className='flex flex-col items-center justify-center' >
                <input className='my-3 border border-red-600' value={name} onChange={handleInput} type='text' name='name' placeholder='name product' required />
                <input className='my-3 border border-red-600' onChange={handleInput} type='file' name='image' placeholder='upload image' required />
                <input className='my-3 border border-red-600' value={price} onChange={handleInput} type='number' name='price' placeholder='price' required />
                <input onChange={handleInput} type='text' value={barcode} name='barcode' placeholder='barcode' required />
                <input className='my-3 border border-red-600' value={priority} onChange={handleInput} type='number' name='priority' placeholder='priority' required min={0} max={5} />
                <textarea className='my-3 border border-red-600' value={description} name='description' onChange={handleInput} cols="50" rows="5" required></textarea>
                <button type='submit' >dd</button>
            </form>



        </div>
    )
}
