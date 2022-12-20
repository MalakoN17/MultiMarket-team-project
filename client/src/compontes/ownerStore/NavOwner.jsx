
export default function NavOwner() {
    const handleProduct = ()=>{
        
    }
    const handleChert = ()=>{

    }
    const handleAccount = ()=>{

    }
  return (
    <div className="h-32 bg-slate-400">
        <nav className="flex justify-around ">
            <div>
                <ul className="flex ">
                    <li className="mx-2"><button className="border border-black" onClick={handleProduct}>product</button></li>
                    <li className="mx-2"><button className="border border-black" onClick={handleAccount}>Account</button></li>
                    <li className="mx-2"><button className="border border-black" onClick={handleChert}>Chert</button></li>
                </ul>
            </div>
            <div>LOGO</div>
        </nav>
    </div>
  )
}
