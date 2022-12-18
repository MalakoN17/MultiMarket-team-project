import React from 'react'
import "./department.css"

export default function Department() {
  return (
    
    
    <div style={{  
      backgroundImage: "url(" + "https://media.istockphoto.com/id/1225155638/photo/green-leaves-on-white.jpg?b=1&s=612x612&w=0&k=20&c=U-yuGVnwjAnib3tiSZEiUA4rjimL0Nlfdwrkr7lpwQM=" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className="">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" >

    <div className="awesome pb-6" >
          <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="מה תרצה לחפש ?" required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">חפש</button>
            </div>
          </form>
        </div>
      <div className="threeInRow sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Fruits and Vegetables" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">פירות וירקות</h3>
        </a>
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/1200667/pexels-photo-1200667.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Delicatessen" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">מעדניות</h3>
        </a>
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/1397292/pexels-photo-1397292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bakeries" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">מאפיות</h3>
        </a>
      </div>
      <div className="threeInRow sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/7852674/pexels-photo-7852674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pharm stuff" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">מוצרי פארם</h3>
        </a>
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="liquor" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">משקאות חריפים</h3>
        </a>
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pets shop" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">הכל לחיות</h3>
        </a>
      </div>
      <div className="threeInRow sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/5836992/pexels-photo-5836992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Homemade food" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">אוכל מוכן לבית</h3>
        </a>
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/6192116/pexels-photo-6192116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Office Supplies" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">ציוד משרדי</h3>
        </a>
        <a href="#" className="group">
          <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Rhythmicity" className="image-depart group-hover:opacity-75" />
          </div>
          <h3 className="departmentTitle">קצביות</h3>
        </a>
      </div>
    </div>
  </div>
  )
}
