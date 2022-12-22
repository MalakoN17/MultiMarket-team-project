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
            state.cartItems.push(action.payload);
            state.total += action.payload.price;
        },
        clearCart:(state)=>{
            state.cartItems = [];
            state.stores = [];
        },
        removeItem:(state, action) =>{
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item)=>{
                return item.id !== id;
            })
        },
        increase: (state, action)=>{
            const crateItem = state.cartItems.find((item)=>{
                return item.id === action.payload.id
            })
            state.amount += 1;
        },
        decrease: (state, action)=>{
            const crateItem = state.cartItems.find((item)=>{
                return item.id === action.payload.id
            })
            state.amount -= 1;
        },
    }
})
// console.log(cartSlice);
export const {addProduct, clearCart, removeItem, increase, decrease} = cartSlice.actions
export default cartSlice.reducer;