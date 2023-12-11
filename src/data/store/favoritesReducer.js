import {createSlice} from "@reduxjs/toolkit";

let localStorageInit = [];

if(localStorage.getItem('favorites')===null){
    localStorage.setItem('favorites', JSON.stringify(localStorageInit))
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState:{
        // favorites:[]
        favorites: JSON.parse(localStorage.getItem('favorites'))
    },
    reducers:{
        addToFavorites(state,action){
            let {id}=action.payload;
            if(!state.favorites.some(el=>el.id === id))
            return{
                ...state, favorites:[...state.favorites, action.payload]
            }
        },
        removeFromFavorites(state,action){
            let {id}=action.payload;
            return{
                ...state, favorites: [...state.favorites.filter(el=>el.id !== id)]
            }
        }
    }
})

export const {addToFavorites,removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;