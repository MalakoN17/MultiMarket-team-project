import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../features/cart/cartSlice';

function TestProduct({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({
    storeId: product.storeId,
    storeName: product.storeName,
    sum: product.price *quantity,
    product: {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image.url,
      quantity: quantity,
      description: product.description,
      barcode: product.barcode,
    },
  });
  const dispatch = useDispatch();

  const handleBtnToCart =()=>{
    item.product.quantity = quantity
    item.sum = item.product.price * quantity
    console.log(item);
    dispatch(addProduct(item))
  }
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="rounded p-4">
          <img
            className="rounded-md"
            src={product.image.url}
            alt="product image"
          />
        </div>

        <div className="px-5 pb-5">
          <div className="pb-3">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {product.name}
            </h3>
            <p className="font-thin text-md tracking-tight dark:text-gray-400">
              {product.description}
            </p>
            <ControlPointIcon
              onClick={() =>{
                setQuantity((prevue) => {
                  return prevue + 1;
                });
                setItem({...item, product:{...item.product, quantity:quantity}});
            }
              }
            />
            <span>{quantity}</span>
            <RemoveCircleOutlineIcon
              onClick={() => {
                if (quantity === 1) {
                  return;
                }
                setQuantity((prevue) => {
                  return prevue - 1;
                });
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₪{product.price}
            </span>
            <button
              type="button"
              onClick={handleBtnToCart}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              הוסף מוצר לעגלה <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestProduct;
