import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    stores:[],
    cartItems: [],
    amount:0,
    savingsPurchase:0,
    total:0,
    isLoading: true
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addProduct:(state, action) =>{
            state.amount += 1;
            console.log("hey");
            state.cartItems.push(action.payload.product);
            state.total += action.payload.price;
        },
        clearCart:(state)=>{
            state.cartItems = [];
            state.stores = [];
        }
    }
})
// console.log(cartSlice);
export const {addProduct, clearCart} = cartSlice.actions
export default cartSlice.reducer;