import { useNavigate } from "react-router"

export default function NavOwner() {
    const navigate = useNavigate()
    const handleNavAccount = ()=>{
        navigate('accountstore')
    }
  
    const handleNavAbut = ()=>{
        navigate()
    }
    const handleNavHome = ()=>{
        navigate('')
    }
  return (
    <div>
      <nav className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-row-reverse  h-16 items-center justify-between">
           
            <div className="flex ">
           
                <p>MULTI MARKET</p>
            </div>
            <div className="hidden  sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div className="flex space-x-4">
                  <span onClick={handleNavAbut} className="menuNav">צור קשר</span>
                  <span onClick={handleNavHome} className="menuNav">דף הבית</span>
                  <span onClick={handleNavAccount} className="menuNav">חשבון</span>
                  <span className="menuNav">התנתקות</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  </div>
  )
}
