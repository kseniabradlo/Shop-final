import {addProductsInCart} from "../../../../../data/store/ShoppingCartReducer";
import {addToFavorites} from "../../../../../data/store/favoritesReducer";
import {useDispatch} from "react-redux";
import './SameCategory.css'

function SameCategory({id,title,price,description,category,image,rating}){

    let dispatch=useDispatch()
    return(
        <div className="sameCategorymain">
            <img src={image}/>
            <p>title</p>
            <p>price</p>

            <button onClick={()=>dispatch(addProductsInCart({id,title,price,description,category,image,rating}))}>add to cart</button>
            <button onClick={()=>dispatch(addToFavorites({id,title,price,description,category,image,rating}))}>add to favorites</button>

        </div>
    )
}

export default SameCategory;