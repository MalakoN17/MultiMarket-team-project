import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  stores: [],
  cartItems: [],
  amount: 0,
  savingsPurchase: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const storeIndex = state.cartItems.findIndex((product) => {
        return product.storeId === action.payload.storeId;
      });
      if (storeIndex >= 0) {
        console.log('storeIndex', storeIndex);
        const index = state.cartItems[storeIndex].products.findIndex(
          (product) => {
            return product.id === action.payload.product.id;
          }
        );
        if (index >= 0) {
          state.cartItems[storeIndex].products[index].quantity += 1;
        } else {
          toast.success('מוצר נוסף בהצלחה', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          state.cartItems[storeIndex].products.push(action.payload.product);
        }
      } else {
        let productObject = {
          storeId: action.payload.storeId,
          storeName: action.payload.storeName,
          products: [action.payload.product],
        };
        toast.success('מוצר נוסף בהצלחה', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        state.cartItems.push(productObject);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.stores = [];
      state.amount = 0;
      state.total = 0;
      state.savingsPurchase = 0;
    },
    removeItem: (state, action) => {
      const cartIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartItems.splice(cartIndex, 1);
    },
    increase: (state, action) => {
      const cartIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartItems[cartIndex].quantity += 1;
      // state.total += state.cartItems[cartIndex].quantity *state.cartItems[cartIndex].price
      // state.amount += 1;
    },
    decrease: (state, action) => {
      const cartIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartItems[cartIndex].quantity -= 1;
      // state.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        item.products.forEach((product) => {
          amount += product.quantity;
          total += product.quantity * product.price;
        });
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const {
  addProduct,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
