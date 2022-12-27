import { useSelector } from 'react-redux'
import { useNavigate } from "react-router"

export default function HomeOwner() {
    const navigate = useNavigate()

    const {store} = useSelector(state=> state.ownerStore)
    const handleUploadProduct = ()=>{
        navigate('addproduct')
    }
    const handleProductsPage = ()=>{
        navigate('allproduct')
    }
    const handleReceipts = ()=>{
        navigate('receipts')
    }
    const handleUpdateStoreDetails = ()=>{
        navigate('updatestoredetails')
    }
  return (
    <>
    <div className=''>
        <h1 className='text-center text-4xl my-5'>ברוך שובך  {store.name}</h1>
        </div>
    <div className=' sm:flex  flex-col py-10  '>
        <div className='flex  justify-around items-center'>
        <div className=' rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] w-[300px] justify-center items-center flex p-2 mb-10'>
            <h1 onClick={handleUploadProduct}  className='text-2xl p-10'>הוספת מוצרים </h1>
        </div>
        <div className=' rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] w-[300px] justify-center items-center flex p-2 mb-10'>
            <h1 onClick={handleProductsPage} className='text-2xl p-10'> מוצרים החנות </h1>
        </div>
        </div>
        <div className='flex justify-center'>
        <div className=' rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] w-[300px] justify-center items-center flex p-2 mb-10' >
            <h1 onClick={handleReceipts} className='text-2xl p-10'>חשבונות  </h1>
        </div>
        </div>
        <div className='sm:flex  justify-around'>
        <div className=' rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] w-[300px] justify-center items-center flex p-2 mb-10  '>
            <h1 className='text-2xl p-10'>פעילות  </h1>
        </div>
        <div className=' rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] w-[300px] justify-center items-center flex p-2 mb-10'>
            <h1 onClick={handleUpdateStoreDetails} className='text-2xl p-10'>עריכת חנות  </h1>
        </div>
        </div>
    </div>
    
    </>
  )
}
