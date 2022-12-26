import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {getStoreProducts} from '../../features/ownerStore/ownerStoreSlice'

export default function OwnerStoreProduct() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getStoreProducts())
    },[])
  return (
    <div>
    <div>
        <img src={''} alt=''/>
    </div>
    <div>
        <h5>שם המוצר</h5>
    </div>
    <div>

    </div>
    <div>
        <div>
            <p>המחיר ל100 גר</p>
            <p>המחיר ל100 גר</p>
        </div>
        <div>
            <p> מספר מקט</p>
            <p>מקט</p>
        </div>
        <div>
            <p>  אלרגנים</p>
        </div>
    </div>
</div>
  )
}
