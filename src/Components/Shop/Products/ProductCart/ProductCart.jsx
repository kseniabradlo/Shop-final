import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {setProduct} from "../../../../data/store/productCartReducer";
import axios from "axios";
import {addProductsInCart, reduceCounterProductInCart} from "../../../../data/store/ShoppingCartReducer";
import {useNavigate} from "react-router-dom";
import {showSameCategory} from "../../../../data/store/productCartReducer";
import SameCategory from "./SameCategory/SameCategory";
import {toggleIsFetching} from "../../../../data/store/shopReducer";
import Preloader from "../../../../Common/Preloader";
import './ProductCart.css'

//komponenta more info(show more)
const ProductCart = ()=>{
    let product = useSelector(state=>state.productCart.product)
    let dispatch = useDispatch();
    let {id} = useParams()

    // zminy dla counter wseredyni ciei kartky i szob win synchronizuwawasia z koszykom
    // let productsFromShopCartReducer = useSelector(state=>state.shoppingCart.productsInCart)
    // // productsFromShopCartReducer.forEach(el=> console.log(el))
    // // console.log(product)
    // let counter;
    // let elWithCounter;
    // productsFromShopCartReducer.forEach(el=>{
    //     if(el.id === product.id){
    //         counter = el.counter;
    //         elWithCounter = el;
    //     }
    // } )
    // /*zminy*/
    // w rozmitci bulo dispatch(addProductsInCart(elWithCounter)
    // ale ce spraciowuwalo tilky, jakszo cej towar wrz ebuw w koszyku:)


    let isFetching = useSelector(state=>state.productCart.isFetching)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response=>{
                dispatch(setProduct(response.data))
                dispatch(toggleIsFetching(true))
            })
    }, []);

    // useEffect(() => {
    //     axios.get(`https://fakestoreapi.com/products/${id}`)
    //         .then(response=> dispatch(setProduct(response.data)))
    // }, []);

    let navigate = useNavigate()
    function backToAllProductsHandler(){
        navigate('/')
    }

    //
    let category = `/category/${product.category}`;
    let sameCategoryUse = useSelector(state=>state.productCart.sameCategory)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${product.category}`)
            .then(response=>dispatch(showSameCategory(response.data)))
    }, [category]);
    console.log(product.category)

    return(
        <div className="productCartmain">
            <button onClick={backToAllProductsHandler}>see all products</button>

               <div className="moreInfoContainer">

                   <div className="moreInfoimg">
                   <img src={product.image}/>
                   </div>

                   <div className="moreInfotext">
                    <p className="title">{product.title}</p>
                   <p>{product.description}</p>
                   {/*<p>rating:{product.rating.rate}</p>*/}
                       <button onClick={() => dispatch(addProductsInCart(product))} >add to cart</button>

                   </div>
                   {/*<p>{counter}</p>*/}
            {/*cej productIncart ce ne toj samyj, szo w reduceri, rposto nazwy propsiw spiwpaly*/}
            {/*<button onClick={() => dispatch(reduceCounterProductInCart(elWithCounter))} >-</button>*/}
               </div>


            <p>SIMILAR PRODUCTS</p>
            <div className="similarProductsContainer">
            {
                isFetching ? <Preloader/> : sameCategoryUse.map(el=><SameCategory {...el}/>)
            }
            </div>
        </div>
    )
}

export default ProductCart;