import Products from "./Products/Products";
import {Link, Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import ProductCart from "./Products/ProductCart/ProductCart";
import './Shop.css';

//ce wse, szo my baczymo:1) Wertykalna panel nawigacji zliwa. Obyrannia productiw po segmentam.2)zprawa sekcja z wywodom wsich towariw
function Shop(){
    return(
        <div className="shopmain">
            <nav>
                <Link to="/electronics">ELECTRONICS</Link>
                <Link to="/jewelery">JEWELERY</Link>
                <Link to="/men's clothing">MEN`S</Link>
                <Link to="/women's clothing">WOMEN`S</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='/:category' element={<Products/>}/>
                <Route path='/products/:id' element={<ProductCart/>}/>
            </Routes>
        </div>
    )
}

export default Shop;