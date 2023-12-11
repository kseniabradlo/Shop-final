import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice(
    {
        name:"shop",
        initialState:{
            products:[],
            isFetching:false
        },
        reducers:{
           setData(state,action){
               // state.products = [...state.products, ...action.payload]
               return {...state, products: [...action.payload]}
           },
            toggleIsFetching(state,action){
               return{...state, isFetching: action.payload}
            }
        }
    }
)

export const {setData,toggleIsFetching} = shopSlice.actions;
export default shopSlice.reducer;