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
            <form onSubmit={handleForm} className='flex flex-col items-center justify-center' >
                <input className='my-3 border border-red-600' value={name} onChange={handleInput} type='text' name='name' placeholder='name product' required />
                <input className='my-3 border border-red-600'  onChange={handleInput} type='file' name='image' placeholder='upload image' required />
                <input className='my-3 border border-red-600' value={price} onChange={handleInput} type='number' name='price' placeholder='price' required />
                <input onChange={handleInput} type='text' value={barcode} name='barcode' placeholder='barcode' required />
                <input className='my-3 border border-red-600' value={priority} onChange={handleInput} type='number' name='priority' placeholder='priority' required min={0} max={5} />
                <select className='my-3 border border-red-600'>
                    { }
                </select>
                <textarea className='my-3 border border-red-600' value={description} name='description' onChange={handleInput} cols="50" rows="5" required></textarea>
                <button type='submit' >dd</button>
            </form>

        </div>
    )
}
