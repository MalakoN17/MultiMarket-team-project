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
        addStore:(state, action)=>{
            const store = state.cartItems.includes(action.payload.storeId)
            if(store){
                alert('')
            }else{
                state.stores.push(action.payload.storeId)
            }
        },
        addProduct:(state, action) =>{
            const index  = state.cartItems.findIndex((product) => {
                return product.productId === action.payload.productId
            })
            console.log(index);
            if(index >= 0){
                alert("hey")
            }else{
                state.cartItems.push(action.payload);
                state.stores.push(action.payload.storeId)
                state.stores.push(action.payload)
                state.total += action.payload.price *action.payload.quantity;
                state.amount += action.payload.quantity  
            }
        },
        clearCart:(state)=>{
            state.cartItems = [];
            state.stores = [];
            state.amount = 0;
            state.total = 0;
            state.savingsPurchase = 0;
        },
        removeItem:(state, action) =>{
            const cartItem = state.cartItems.filter((item)=>{
                return item.productId !== action.payload.productId;
            })
            state.cartItems = cartItem
        },
        increase: (state, action)=>{
            const cartIndex = state.cartItems.findIndex((item)=>{
                return item.productId === action.payload.productId
            })
            if(state.cartItems[cartIndex].quantity < 1){
                state.cartItems[cartIndex].quantity += 1
            }else{

            }
            // state.cartItems[cartItem].quantity += 1
            state.amount += 1;
        },
        decrease: (state, action)=>{
            const crateItem = state.cartItems.findIndex((item)=>{
                return item.id === action.payload.id
            })
            action.payload.quantity -= 1
            state.amount -= 1;
        },
    }
})
// console.log(cartSlice);
export const {addProduct, clearCart, removeItem, increase, decrease} = cartSlice.actions
export default cartSlice.reducer;