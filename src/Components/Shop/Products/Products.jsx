import style from './Products.module.css';
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setData, toggleIsFetching} from "../../../data/store/shopReducer";
import Product from "./Product/Product";
import {useParams} from "react-router-dom";
import Preloader from "../../../Common/Preloader";

// komponenta, w kotoroj wywod wsech naszych produktow. Ta sprawa wseredinie komponenty shop
function Products(){

    let products = useSelector(state=>state.shop.products)
    let dispatch = useDispatch()
    let {category}=useParams()

    category = category ? `/category/${category}` : '';


    let isFetching = useSelector(state=>state.shop.isFetching)

    useEffect(() => {
        dispatch(toggleIsFetching(true))
        axios
            .get(`https://fakestoreapi.com/products${category}`)
            .then(response=>{
                dispatch(setData(response.data))
                dispatch(toggleIsFetching(false))
            })

    }, [category]);

    return(
        <div className={style.Products}>
            {
                isFetching ? <Preloader/> : products.map(el=><Product {...el}/>)
            }
        </div>
    )
}


export default Products;


//alternativa kak sdelat api na lokalnom sostojanii
//     let[dataval,setDat aval]=useState([])
//
//     useEffect(() => {
//         axios
//             .get('https://fakestoreapi.com/products')
//             .then(response=>setDataval(response.data))
//     }, []);
//
//     return(
//         <div className={style.Products}>
//             {
//                 dataval.map(el=><div>{el.title}</div>)
//             }
//         </div>
//     )
// }