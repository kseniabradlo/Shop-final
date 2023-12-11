import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./shopReducer";
import productCartReducer from "./productCartReducer";
import shoppingCartReducer from './ShoppingCartReducer';
import favoritesReducer from './favoritesReducer'
import reviewsReducer from "./reviewsReducer";

let store = configureStore({
    reducer:{
        shop: shopReducer,
        productCart:productCartReducer,
        shoppingCart:shoppingCartReducer,
        favorites: favoritesReducer,
        reviews: reviewsReducer
    }

})

export default store;