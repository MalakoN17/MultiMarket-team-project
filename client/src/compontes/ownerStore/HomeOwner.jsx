import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router"

export default function HomeOwner() {
    const navigate = useNavigate()

    const { user } = useSelector(state => state.user)
    console.log(user);
    const handleUploadProduct = () => {
        navigate('addproduct')
    }
    const handleProductsPage = () => {
        navigate('allproduct')
    }
    const handleReceipts = () => {
        navigate('receipts')
    }
    const handleUpdateStoreDetails = () => {
        navigate('updatestoredetails')
    }

    const handleChat = () => {
        navigate('/chat')
    }

    return (
        <> 
            <div className='flex justify-center'>
                <h1 className='text-center text-4xl my-5'>ברוך שובך  {user.currentUser.firstName} {user.currentUser.lastName} </h1>
            </div>
            <div className='flex flex-wrap justify-center py-10'>
                <div onClick={handleUploadProduct}  className='w-2/6 ml-4 text-center rounded-md bg-black text-white hover:bg-lime-600 h-[210px] justify-center items-center flex p-2 mb-10'>
                    <h1 className='text-2xl p-10'>הוספת מוצרים </h1>
                </div>
                <div onClick={handleProductsPage} className='w-2/6 ml-4 text-center rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] justify-center items-center flex p-2 mb-10'>
                    <h1 className='text-2xl p-10'> מוצרים החנות </h1>
                </div>
                <div onClick={handleReceipts}  className='w-2/6 ml-4 text-center rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] justify-center items-center flex p-2 mb-10' >
                    <h1 className='text-2xl p-10'>חשבונות  </h1>
                </div>
                <div onClick={handleChat} className='w-2/6 ml-4 text-center rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] justify-center items-center flex p-2 mb-10' >
                    <h1 className='text-2xl p-10'>מרכז ההודעות</h1>
                </div>
                <div className='w-2/6 ml-4 text-center rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] justify-center items-center flex p-2 mb-10  '>
                    <h1 className='text-2xl p-10'>פעילות  </h1>
                </div>
                <div onClick={handleUpdateStoreDetails} className='w-2/6 ml-4 text-center rounded-md  bg-black text-white hover:bg-lime-600 h-[210px] justify-center items-center flex p-2 mb-10'>
                    <h1 className='text-2xl p-10'>עריכת חנות  </h1>
                </div>
            </div>

        </>
    )
}
