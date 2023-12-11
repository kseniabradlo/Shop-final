import {createSlice} from "@reduxjs/toolkit";

let localStorageInit = []
if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify(localStorageInit));
}
const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState:{
        // productsInCart:[]
        productsInCart: JSON.parse(localStorage.getItem('cart'))
    },
    reducers:{
        addProductsInCart(state,action){
            let {id} = action.payload;
            let productInCart = {...action.payload, counter:1};
            if(!state.productsInCart.some(el=>el.id ===id))
            return{
                ...state, productsInCart:[ ...state.productsInCart, productInCart]
            }
            else {
                state.productsInCart.forEach(el=>{
                    if(el.id === id){
                        el.counter +=1;
                    }
                })
            }
        },

        reduceCounterProductInCart(state,action){
           let {counter}=action.payload;
           let {id} = action.payload;
           if(counter === 1 || counter > 1){
               state.productsInCart.forEach(el=>{
                   if(el.id === id){
                       el.counter -= 1;
                   }
               })
           }
        },
        removeProductAtCart(state,action){
            let {id}=action.payload;
            return{
                ...state, productsInCart: [...state.productsInCart.filter(el=>el.id !== id)]
            }
        }
    }
})

export const {addProductsInCart,reduceCounterProductInCart,removeProductAtCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;