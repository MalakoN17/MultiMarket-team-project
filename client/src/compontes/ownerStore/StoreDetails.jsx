import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function StoreDetails() {
  const {store} = useSelector(state => state.ownerStore)
  useEffect(()=>{
    
},[])
  return (
    <div className="text-center">
    פרטי חשבון
    <div>
        <h1 className="text-xl">שם החנות:     {store.name}</h1>
    </div>
    <div>
        <h1>{store.description}</h1>
    </div>
    <div>
    <h1> {store.bnNumber}</h1>
    </div>
  
    <div>
        <h1>{store.phone}</h1>
    </div>
    <div>
        <h1>{store.email}</h1>
    </div>
    <div>
        <h1>{store.address?.city}</h1>
    </div>
    <div>
        <h1>{store.address?.street}</h1>
    </div>
    <div>
        <h1>{store.address?.building}</h1>
    </div>
    <div>
        <h1>{store.address?.apartment}</h1>
    </div>
    <div>
        תמונות החנות
    <div className=" ">

        <img src={store.lightlogo.url} />
    
        <img src={store.darklogo.url}/>
    
        <img src={store.coverImage.url} alt="תמונת הלוגו של החברה"/>
    </div>
    </div>
</div>
  )
}
