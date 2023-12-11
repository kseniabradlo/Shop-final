// komponenta odnoj kartoczki towara, wstrojena w komponentu ProductS(wywod wsech towarow)
import './Product.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductsInCart} from "../../../../data/store/ShoppingCartReducer";
import {addToFavorites} from "../../../../data/store/favoritesReducer";

function Product({id,title,price,description,category,image,rating}){
    let navigate = useNavigate();

    function showMoreHandler(){
        navigate(`/products/${id}`)
    }

    let dispatch=useDispatch()
    function addProductsIncartHandler(){
        dispatch(addProductsInCart({id,title,price,description,category,image,rating}))
    }

    return(
        <div className="Product">
            <div className="moreInfocontainer">
              <div>
                <img src={image}/>
                </div>
                {/*<div className="title">{title}</div>*/}
                <h3>{price}$</h3>
                {/*<div>rating:{rating.rate}</div>*/}
            </div>

            <div className="buttons">
            <button onClick={showMoreHandler}>show more</button>
            <button onClick={addProductsIncartHandler}>add to cart</button>
            <button onClick={()=> dispatch(addToFavorites({id,title,price,description,category,image,rating}))}>add to favorites</button>
            </div>

            </div>
    )
}

export default Product;