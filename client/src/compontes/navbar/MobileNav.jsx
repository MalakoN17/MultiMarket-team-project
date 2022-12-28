import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

// menu , search , cart, store,chat
import { useDispatch,useSelector } from 'react-redux';
import { removeUser } from '../../features/user/userSlice';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import ChatIcon from '@mui/icons-material/Chat';
import Example from './MenuMobile';


export default function MobileNav() {
  const { user } = useSelector(state => state.user)

  return (
    <div className='block sm:hidden'>
      <nav className="fixed bottom-0 inset-x-0 bg-white flex justify-between text-sm text-black">
        {user?.currentUser ? (
          <a href="#" className=" w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
            <StoreIcon />
            <p>אזור tha אישי</p>
          </a>
        ) : (
          <>
            <div className="w-full flex flex-col items-center  py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
              <Example  />
              <p>תפריט</p>
            </div>

            <a href="/" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
              <SearchIcon />
              <p>דף הבית</p>
            </a>

            <a href="#" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
              <ShoppingCartIcon />
              <p>עגלה שלי</p>
            </a>

            <a href="chat" className="w-full block py-5 px-3 text-center hover:bg-lime-600 hover:text-white">
              <ChatIcon />
              <p>צ'אט</p>
            </a>
          </>
        )}
      </nav>
    </div>

  )
}






