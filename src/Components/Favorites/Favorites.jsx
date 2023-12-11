import {useSelector} from "react-redux";
import FavoriteCarD from "./FavoriteCarD";
import './Favorites.css';

import {useEffect} from "react";

function Favorites(){
    let productsInFavorites = useSelector(state=>state.favorites.favorites)

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(productsInFavorites))
    },[productsInFavorites])

    return(
        <div className="favoritesMain">
            {
                productsInFavorites.map(el=> <FavoriteCarD {...el}/>)
            }
        </div>
    )
}

export default Favorites;