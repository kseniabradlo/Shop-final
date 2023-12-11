import {createSlice} from "@reduxjs/toolkit";

const productCart = createSlice({
    name:'productCart',
    initialState:{
        product:{},
        sameCategory:[],
    //
        isFetching:false
    },
    reducers:{
        setProduct(state,action){
            return{
                ...state,product:{...action.payload}
            }
        },
        showSameCategory(state,action){
            return {...state, sameCategory: [...action.payload]}
        },
        //
        toggleIsFetching(state,action){
        return{...state, isFetching: action.payload}
        }

    }
})

export const {setProduct,showSameCategory,toggleIsFetching}=productCart.actions;
export default productCart.reducer;