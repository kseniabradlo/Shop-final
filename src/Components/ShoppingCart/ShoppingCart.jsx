import './ShoppingCart.css'
import {useSelector} from "react-redux";
import ProductInCart from "./ProductInCart/ProductInCart";

//
import {useEffect} from "react";

function ShoppingCart(){

    let productsInCart = useSelector(state=>state.shoppingCart.productsInCart)

    //
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(productsInCart))
    },[productsInCart])

    return(
        <div className="shoppingCartMain">
            <div className="formItems">
                <div className="form">
                    <h3>Name:</h3>
                    <input type="text" placeholder='name...'/>
                    <h3>Email:</h3>
                    <input type="text" placeholder='e-mail...'/>
                    <h3>Phone:</h3>
                    <input type="text" placeholder='phone number...'/>
                    <h3>Address:</h3>
                    <input type="text" placeholder='address...'/>
                    <button>SEND</button>
                </div>
                <div className="items">
                    {productsInCart.map(productInCart => <ProductInCart productInCart={productInCart}/>)}
                </div>
            </div>
            <div className="totalSubmit">
                {/*<h2>Total Price: {productsInCart.reduce((acc, productInCart) => acc + (productInCart.price * productInCart.counter), 0).toFixed(2)}$</h2>*/}
                <button>SUBMIT</button>
            </div>
        </div>
    )
}

export default ShoppingCart;