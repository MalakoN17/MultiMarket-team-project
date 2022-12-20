import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../features/cart/cartSlice';
import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png';
import onion from '../../assets/images/products_images/onions.jpg';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './cartStyle.css';

function Cart() {
    const [order, setOrder] = useState([{id:1, storeName:'ירקות', products:[{id:12, name:'בצל', quantity:1, price:9.90}]},{id:1, storeName:'ירקות', products:[{id:12, name:'בצל', quantity:1, price:9.90}]}])
    const {amount} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    const hendle = ()=>{
        // dispatch(addProduct({product, amount}))
    }
  return (
    <>
      <div className='h-full'>
        <div className="bg-gray-800 p-2 text-center">
          <h3 className="text-white">עגלת קניות</h3>
        </div>
        <div className="flex flex-col justify-between h-[95%]">
            {order.map((order, index) =>{
                return(
                    <div key={index}>
                    <div className="bg-gray-100 flex gap-1 p-1">
                      <div className="store-img-cart-container">
                        <img
                          className="store-img-cart"
                          src={businessLiaisonLogo}
                          alt=""
                        />
                      </div>
                      <p>{order.storeName}</p>
                    </div>
                    <div className="products-cart-container">
                        {order.products.map((product, index)=>{
                            return(
                                <div className="flex items-center justify-around">
                                <img src={onion} alt="" width="60px" />
                                <div>
                                  <p className="product-name">{product.name}</p>
                                  <p className="text-gray-400">{order.storeName}</p>
                                </div>
                                <div>
                                  <div className="flex gap-1">
                                    <RemoveCircleOutlineIcon />
                                    <p>{product.quantity}</p>
                                    <ControlPointIcon />
                                  </div>
                                  <div>
                                    <p>{product.price} ש"ח</p>
                                  </div>
                                </div>
                              </div>
                            )

                        })}

                      {/* <div className="flex items-center justify-around">
                        <img src={onion} alt="" width="60px" />
                        <div>
                          <p className="product-name">שם מוצר</p>
                          <p className="text-gray-400">שם החנות</p>
                        </div>
                        <div className="flex gap-1">
                          <RemoveCircleOutlineIcon />
                          <p>2</p>
                          <ControlPointIcon />
                        </div>
                      </div> */}
                      <div className="flex justify-end">
                        <p className="store-sum">סה"כ: 4 ש"ח</p>
                      </div>
                    </div>
                  </div>
                )
            })}

          <div>
            <div className="bg-gray-100 flex gap-1 p-1">
              <div className="store-img-cart-container">
                <img
                  className="store-img-cart"
                  src={businessLiaisonLogo}
                  alt=""
                />
              </div>
              <p>שם החנות</p>
            </div>
            <div className="products-cart-container">
              <div className="flex items-center justify-around">
                <img src={onion} alt="" width="60px" />
                <div>
                  <p className="product-name">שם מוצר</p>
                  <p className="text-gray-400">שם החנות</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    <RemoveCircleOutlineIcon />
                    <p>2</p>
                    <ControlPointIcon />
                  </div>
                  <div>
                    <p>9.90 ש"ח</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around">
                <img src={onion} alt="" width="60px" />
                <div>
                  <p className="product-name">שם מוצר</p>
                  <p className="text-gray-400">שם החנות</p>
                </div>
                <div className="flex gap-1">
                  <RemoveCircleOutlineIcon />
                  <p>2</p>
                  <ControlPointIcon />
                </div>
              </div>
              <div className="flex justify-end">
                <p className="store-sum">סה"כ: 4 ש"ח</p>
              </div>
            </div>
          </div>
          <div className='sum-container'>
            <div className='p-3'>
            <div className="flex justify-between">
              <p>סה"כ</p>
              <p>8 ש"ח</p>
            </div>
            <div className="flex justify-between">
              <p>בקניה זו חסכת</p>
              <p>8 ש"ח</p>
            </div>
            <button>הסוף  מוצר</button>
            <div className="flex justify-between">
              <p>מספר מוצרים</p>
              <p>{amount}</p>
            </div>
            </div>
            <button className='pay-btn w-full'>
              לתשלום <span>100</span> ש"ח
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;