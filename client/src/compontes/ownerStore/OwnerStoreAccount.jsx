import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStores } from '../../features/ownerStore/ownerStoreSlice'

export default function OwnerStoreAccount() {
    const storeD = useSelector(state => state.ownerStore)
    const { isLogin, isSuccuss, store } = storeD
    const [storeDe, setStore] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStores('6391e77a46a83544c853314f'))

    }, [])
    useEffect(() => {
        setStore(store)
    }, [isSuccuss])
    return (
        <div className="border border-black flex flex-col justify-center items-center">
            <div>
                <h1>{storeDe.name}</h1>
            </div>
            <div>
                <h1>{storeDe.description}</h1>
            </div>
            <div>
                <h1>{storeDe.bnNumber}</h1>
            </div>
            <div>
                <img src={storeDe.lightlogo} />
            </div>
            <div>
                <img src={storeDe.darklogo} />
            </div>
            <div>
                <img src={storeDe.coverImage} />
            </div>
            <div>
                <h1>{storeDe.phone}</h1>
            </div>
            <div>
                <h1>{storeDe.email}</h1>
            </div>
            <div>
                <h1>{storeDe.address?.city}</h1>
            </div>
            <div>
                <h1>{storeDe.address?.street}</h1>
            </div>
            <div>
                <h1>{storeDe.address?.building}</h1>
            </div>
            <div>
                <h1>{storeDe.address?.apartment}</h1>
            </div>
        </div>
    )
}