import { useNavigate } from "react-router"

export default function NavOwner() {
    const navigate = useNavigate()
    const handleNavAccount = ()=>{
        navigate('accountstore')
    }
    const handleNavUploadProduct = ()=>{
        navigate('addproduct')
    }
    const handleNavAbut = ()=>{
        navigate()
    }
  return (
    <div>
    {/* <div className="awesome" > */}
      <nav className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-row-reverse  h-16 items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center">
            </div> */}
            <div className="flex ">
              {/* <div className="flex flex-shrink-0 mx-60 items-center"> */}
                {/* <img className="h-8 w-auto" src={logo} alt="Your Company" /> */}
                <p>MULTI MARKET</p>
              {/* </div> */}
            </div>
            <div className="hidden  sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
              {/* <div className="hidden  sm:block"> */}
                <div className="flex space-x-4">
                  <span onClick={handleNavAbut} className="menuNav">צור קשר</span>
                  <span onClick={handleNavUploadProduct} className="menuNav">העלת מוצרים</span>
                  <span onClick={handleNavAccount} className="menuNav">חשבון</span>
                </div>
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    {/* </div> */}
  </div>
  )
}
