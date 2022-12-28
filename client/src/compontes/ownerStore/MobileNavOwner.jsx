import React from 'react'
import { useNavigate } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import ChatIcon from '@mui/icons-material/Chat';

export default function MobileNavOwner() {
    const navigate =  useNavigate()
  return (
    <div className='block  sm:hidden'>
            <nav className="fixed bottom-0 inset-x-0 bg-white flex justify-between text-sm text-black">
          <a href="#" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
           <ListIcon />
           <p>דף הבית</p>
          </a>
          <a href="#" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
           <SearchIcon />
           <p> חשבון</p>
          </a>
          <a href="#" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
            <ShoppingCartIcon />
            <p> התנתקות</p>
          </a>
          <a href="#" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
            <StoreIcon />
            <p>אזור אישי</p>
          </a>
          <a href="#" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
           <ChatIcon />
            <p>צ'אט</p>
          </a>
        </nav>
    </div>
  )
}
