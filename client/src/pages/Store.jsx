import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Product from '../compontes/products/Product'
import Cart from '../compontes/main/Cart';
import DesktopNav from '../compontes/navbar/DesktopNav';
import MobileNav from '../compontes/navbar/MobileNav';

function Store() {
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(`http://localhost:8000/api/product/store/${location.state.store._id}`);
            setProducts(data)
        }
        getProducts()
    }, [])

    return (
        <>
            <DesktopNav />
            <div className="sm:h-96 h-40 w-full"
                style={{
                    backgroundImage: "url(" + location.state.store.coverImage.url + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
            </div>

            <div className='flex py-2 backdrop-blur-xl pr-20 relative '>

                <img className='w-20  absolute bottom-10 right-5 border' src={location.state.store.lightlogo.url} alt="" />

                <div className='pr-8 '>
                    <h1 className="text-2xl leading-6 text-gray-900">{location.state.store.name}</h1>
                    <div className="flex items-center py-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="leading-6 text-gray-900">(38 חוות דעת)</p>

                    </div>
                    <h3 className="leading-6 text-gray-900">{location.state.store.description}</h3>
                </div>

                <div>
                    <h3 className="leading-6 text-gray-900 mx-2">{location.state.store.address.street} {location.state.store.address.building} , {location.state.store.address.city}</h3>
                    <h3 className="leading-6 text-gray-900">{location.state.store.phone}</h3>
                </div>
            </div>

            <div className='pr-7 pt-5'>
                <h1 className=" leading-6 text-gray-900">סנן תוצאות לפי:</h1>
                <h1 className=" leading-6 text-gray-900">נמצאו <span className="text-green-400">{products.length}</span> מוצרים בחנות זו</h1>
            </div>

            <div className="container flex justify-center">
                <section className="px-1 sm:px-6 lg:px-4 pt-6 pb-28">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {products.map((product) => {
                            return (
                                <div key={product._id}>
                                    <Product product={product} />
                                </div>
                            )
                        })}
                    </div>
                </section>

                <div className='hidden md:block'>
                    <Cart />
                </div>
            </div>
            <MobileNav />
        </>
    )
}

export default Store