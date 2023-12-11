import './ProductInCart.css'
import {useDispatch} from "react-redux";
import {addProductsInCart} from "../../../data/store/ShoppingCartReducer";
import {reduceCounterProductInCart} from "../../../data/store/ShoppingCartReducer";
import {removeProductAtCart} from "../../../data/store/ShoppingCartReducer";

function ProductInCart(props){
    let dispatch = useDispatch()
    return(
        <div className="productInCartmain">

            <div className="cartInfo">
                <div className="imgTitle">
                <img src={props.productInCart.image} alt=""/>
                <h4>{props.productInCart.title}</h4>
                </div>
                <div className="counter">{props.productInCart.counter}
                <button onClick={() => dispatch(addProductsInCart(props.productInCart))} >+</button>
                <button onClick={() => dispatch(reduceCounterProductInCart(props.productInCart))} >-</button>
                </div>
            </div>

                      <div className="cartBtns">
                {/*cej productIncart ce ne toj samyj, szo w reduceri, rposto nazwy propsiw spiwpaly*/}

                    <button onClick={() => dispatch(removeProductAtCart(props.productInCart))}>Remove</button>
                     </div>

        </div>
    )
}

export default ProductInCart;