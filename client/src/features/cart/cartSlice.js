import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  stores: [],
  cartItems: [],
  stripe: [],
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
         action.payload.product.price = +action.payload.product.price
        const stripeIndex = state.stripe.findIndex((index)=>{
            return index.id === action.payload.product.id
        })
      const storeIndex = state.cartItems.findIndex((product) => {
        return product.storeId === action.payload.storeId;
      });
      if (storeIndex >= 0) {
        const index = state.cartItems[storeIndex].products.findIndex(
          (product) => {
            return product.id === action.payload.product.id;
          }
        );
        if (index >= 0 && stripeIndex >= 0) {
            console.log(action.payload.quantity);
            state.cartItems[storeIndex].sum += +action.payload.sum
          state.cartItems[storeIndex].products[index].quantity += +action.payload.product.quantity;
          state.stripe[stripeIndex].quantity += +action.payload.product.quantity
        } else {
          toast.success('מוצר נוסף בהצלחה', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          state.cartItems[storeIndex].sum += +action.payload.sum
          state.cartItems[storeIndex].products.push(action.payload.product);
          state.stripe.push(action.payload.product)
        }
      } else {
        let productObject = {
          storeId: action.payload.storeId,
          storeName: action.payload.storeName,
          sum: action.payload.sum,
          products: [action.payload.product],
        };
        state.stripe.push(action.payload.product)
        toast.success('מוצר נוסף בהצלחה', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        state.cartItems.push(productObject);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.stores = [];
      state.stripe = [];
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
      const index = state.cartItems[cartIndex].products.findIndex(
        (product) => {
          return product.id === action.payload.product.id;
        })
        state.cartItems[cartIndex].products[index].quantity += 1;

    },
    decrease: (state, action) => {
      const cartIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartItems[cartIndex].quantity -= 1;
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
