import React from 'react'
import './style.css';
import vegetablesImage from '../../assets/images/Screenshot 2022-12-14 232104.png';
import smallHome from '../../assets/images/smallhome.png';
import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png';
import onion from '../../assets/images/products_images/onions.jpg';

function StoreProducts() {
    return (
        <>
            <div className="background-image w-full">
                <img src={vegetablesImage} alt="" width="100%" className="shadow-xl" />
            </div>


            
            <div className="container flex justify-center">
                <div className="container gap-3 w-[40%]">
                    <h1 className="text-[30px]"> חוות הבית </h1>
                    <div className="flex ">
                        <h1 className=""> חוות דעת </h1>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container flex justify-center">
                <div className="container gap-3 w-[40%]">

                    <div className="flex items-center gap-1">
                        <img src={smallHome} alt="" width="35px" />
                        <p>
                            נמצאו <span className="text-green-400">78</span> מוצרים בחנות זו
                        </p>
                    </div>
                </div>
            </div>


            <div className="container flex justify-center">
                <div className="container gap-3 w-[40%]">
            
                   
                    <div className="flex items-center gap-1">
                        <img src={smallHome} alt="" width="35px" />
                        <p>
                            נמצאו <span className="text-green-400">78</span> חנויות במודעין
                        </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
                            <img src={smallHome} alt="" />
                            <div>
                                <h4>חוות הבית</h4>
                                <p></p>
                                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                                <div className="flex">
                                    <img
                                        className="business-liaison-logo"
                                        src={businessLiaisonLogo}
                                        alt=""
                                    />
                                    <div>
                                        <p>עמק זבולון 3,</p>
                                        <p>מודעין, אזור המרכז</p>
                                    </div>
                                </div>
                            </div>
                            <button className="store-btn">קנה בחנות זו</button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
                            <img src={smallHome} alt="" />
                            <div>
                                <h4>חוות הבית</h4>
                                <p></p>
                                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                                <div className="flex">
                                    <img
                                        className="business-liaison-logo"
                                        src={businessLiaisonLogo}
                                        alt=""
                                    />
                                    <div>
                                        <p>עמק זבולון 3,</p>
                                        <p>מודעין, אזור המרכז</p>
                                    </div>
                                </div>
                            </div>
                            <button className="store-btn">קנה בחנות זו</button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
                            <img src={smallHome} alt="" />
                            <div>
                                <h4>חוות הבית</h4>
                                <p></p>
                                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                                <div className="flex">
                                    <img
                                        className="business-liaison-logo"
                                        src={businessLiaisonLogo}
                                        alt=""
                                    />
                                    <div>
                                        <p>עמק זבולון 3,</p>
                                        <p>מודעין, אזור המרכז</p>
                                    </div>
                                </div>
                            </div>
                            <button className="store-btn">קנה בחנות זו</button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
                            <img src={smallHome} alt="" />
                            <div>
                                <h4>חוות הבית</h4>
                                <p></p>
                                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                                <div className="flex">
                                    <img
                                        className="business-liaison-logo"
                                        src={businessLiaisonLogo}
                                        alt=""
                                    />
                                    <div>
                                        <p>עמק זבולון 3,</p>
                                        <p>מודעין, אזור המרכז</p>
                                    </div>
                                </div>
                            </div>
                            <button className="store-btn">קנה בחנות זו</button>
                        </div>
                        <div>
                            <button className="pul-btn text-gray-800">+</button>
                        </div>
                    </div>
                </div>
                <div className="w-[18%] sm:flex-none block border">
                    <div className="bg-gray-800 p-2 text-center">
                        <h3 className="text-white">עגלת קניות</h3>
                    </div>
                    <div>
                        <div className="bg-gray-100 flex gap-1 p-1">
                            <div className="store-img-cart-container">
                                <img
                                    className="store-img-cart"
                                    src={businessLiaisonLogo}
                                    alt=""
                                />
                            </div>
                            <p>שם החנות</p>
                        </div>
                        <div className="products-cart-container">
                            <div className='flex items-center justify-around'>
                                <img src={onion} alt="" width="60px" />
                                <div>
                                    <p className='product-name'>שם מוצר</p>
                                    <p className='text-gray-400'>שם החנות</p>
                                </div>
                                <div className="flex gap-1">
                                    <p>2</p>
                                    <span className="add-btn">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StoreProducts