import'./FavoriteCarD.css'
import {useDispatch, useSelector} from "react-redux";
import {removeFromFavorites} from "../../data/store/favoritesReducer";
import {addProductsInCart} from "../../data/store/ShoppingCartReducer";

// komponenta odnogo towaru favorite
function FavoriteCarD({id,title,price,description,category,image,rating}){
    let dispatch=useDispatch();

    return(
        <div className="favoriteMain">
            <img src={image} alt=""/>
                <h4>{title}</h4>
                <h3>{price}$</h3>

            <button onClick = {()=>dispatch(removeFromFavorites({id,title,price,description,category,image,rating}))
            }>delete from favorites</button>

            <button onClick={()=>dispatch(addProductsInCart({id,title,price,description,category,image,rating}))}>add to cart</button>
        </div>
    )
}

export default FavoriteCarD;