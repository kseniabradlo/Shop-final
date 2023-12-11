import {createSlice} from "@reduxjs/toolkit";

let reviewsInit = [];
if(localStorage.getItem('reviews')===null){
    localStorage.setItem('reviews', JSON.stringify(reviewsInit))
}

const reviewsSlice = createSlice({
    name:'reviews',
    initialState:{
        reviews:JSON.parse(localStorage.getItem('reviews'))
    },
    reducers:{
        setReviews(state,action){
                 return{
                ...state,reviews:[...state.reviews, action.payload]
            }
        }
    }
})

export const {setReviews}=reviewsSlice.actions;
export default reviewsSlice.reducer;