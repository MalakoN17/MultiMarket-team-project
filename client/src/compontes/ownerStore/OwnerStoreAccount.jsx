import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getStores} from '../../features/ownerStore/ownerStoreSlice'

export default function OwnerStoreAccount() {
    const storeState = useSelector(state=> state.ownerStore)
    const [store, setStore] = useState(storeState)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getStores('6391e77a46a83544c853314f'))
    },[])
  return (
    <div>
        
      { store.bnNumber }
       { store.name}
        {store.description}
        {store.lightlogo}
        {store.darklogo}
        {/* {coverImage}
        { address}
       { phone}
        {email}
        {departmentIds}
            {city}
            {street}
            {building}
            {apartment}
        {active} */}
    </div>
  )
}
