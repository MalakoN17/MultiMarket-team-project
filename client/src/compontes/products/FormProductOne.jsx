import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { settingProduct } from '../../features/product/produceSlice';


export default function FormProductOne() {
    const item = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ barcode: '', image: '', name: '', price: 0, priority: 1, sectionId: '', productStock: '', description: '', storeId: '', manufacturer: '' });
    const { barcode, image, name, price, priority, sectionId, productStock, description, storeId, manufacturer, kosherType, productTag } = product;
    const navigate = useNavigate();
    const [parallelImporter, setParallelImporter] = useState({ parallelImporter: false })


    useEffect(() => {
        if (item) {
            setProduct(item)
        }
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    };

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(settingProduct(product))
        navigate('/addproduct/formproducttwo')
    };

    const handleChange = (event) => {
        setParallelImporter({
            ...parallelImporter,
            [event.target.name]: event.target.checked,
        });
    };


    return (
        <div >

            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className="py-6 px-2" onSubmit={handleForm}>
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                שם המוצר:
                            </label>
                            <input value={name} onChange={handleInput} type="name" name="name" placeholder="לדוגמא: עגבניות שרי" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D] text-right">
                                תמונת המוצר:
                            </label>

                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" onChange={handleInput} value={image} name='image' type="file" className="hidden" />
                                </label>
                            </div>

                            {
                                image &&
                                <div className="mb-5 mt-2 rounded-md bg-[#F5F7FB] py-4 px-8">
                                    <div className="flex items-center justify-between">
                                        <span className="truncate pr-3  text-base font-medium text-[#07074D]">
                                            {image}
                                        </span>

                                    </div>
                                </div>
                            }
                        </div>

                        <div className="mb-5">
                            <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                מחיר המוצר:
                            </label>
                            <input value={price} onChange={handleInput} name="price" type="number" placeholder="הכנס מחיר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="barcode" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                ברקוד המוצר:
                            </label>
                            <input value={barcode} onChange={handleInput} name="barcode" type="text" placeholder="הכנס ברקוד" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="priority" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                עדיפות המוצר:
                            </label>
                            <input value={priority} onChange={handleInput} name="priority" type="text" placeholder="הכנס עדיפות מוצר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                תיאור מוצר:
                            </label>
                            <input value={description} onChange={handleInput} name="description" type="text" placeholder="הכנס תיאור מוצר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                סוג כשרות:
                            </label>
                            <select onChange={handleInput} name='kosherType' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >בחר סוג כשרות</option>
                                <option value='בד"ץ'>בד"ץ</option>
                                <option value='רבנות'>רבנות</option>
                                <option value='מהדרין'>מהדרין</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                חיי מדף:
                            </label>
                            <select onChange={handleInput} name='productTag' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >בחר סוג תוקף</option>
                                <option value='surfaces'>מוצר מדף</option>
                                <option value='short-exp'>תוקף קצר</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="subcategory" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                קטגוריית מוצר:
                            </label>
                            <select defaultValue={'בחר קטגוריית מוצר'} onChange={handleInput} name='subcategory' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >בחר קטגוריית מוצר</option>
                                <option value='ירקות'>ירקות</option>
                                <option value='פירות'>פירות</option>
                                <option value='חלבי'>חלבי</option>
                                <option value='בשרים'>בשרים</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="measureUnits" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                יחידות משקל:
                            </label>
                            <select defaultValue={'בחר סוג יחידת משקל'} onChange={handleInput} name='productTag' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >בחר סוג יחידת משקל</option>
                                <option value='units'>יחידות</option>
                                <option value='kg'>קילוגרמים</option>
                                <option value='g'>גרמים</option>
                                <option value='liters'>ליטרים</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="weight" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                משקל המוצר:
                            </label>
                            <input onChange={handleInput} type="number" name="weight" placeholder="לדוגמא: 10" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="parallelImporter" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                סוג יבואן:
                            </label>
                            <div className="flex items-center">
                                <input onChange={handleChange} type="checkbox" name='parallelImporter' className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checked-checkbox" className="ml-2 mx-2 text-sm font-medium text-gray-900 dark:text-gray-500">יבואן מקביל</label>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="parallelImporter" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                יבואן המוצר:
                            </label>
                            <input onChange={handleInput} type="text" name="weight" placeholder="הכנס שם יבואן" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="manufacturer" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                יצרן:
                            </label>
                            <input onChange={handleInput} type="text" name="brand" placeholder="הכנס שם יצרן" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="contactInfo" className="mb-3 block text-base font-medium text-[#07074D] text-right">
                                פרטים ליצירת קשר:
                            </label>
                            <input onChange={handleInput} type="text" name="weight" placeholder="הכנס פרטים ליצירת קשר" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right" required />
                        </div>


                        <div>
                            <button className="hover:shadow-form w-full rounded-md mt-4 bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                המשך לשלב הבא
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
