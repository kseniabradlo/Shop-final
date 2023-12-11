import style from './App.module.css';
import {Link,Route, Routes} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Favorites from "./Components/Favorites/Favorites";
import Reviews from "./Components/Shop/Products/ProductCart/Reviews/Reviews";
import Contact from "./Components/Contact/Constact";
import logo from './img/Frame (1) (1).png';
import Lyma from "./Components/Lyma/Lyma";
        import {useNavigate} from "react-router-dom";

function App() {
    let navigate = useNavigate();
  return (
    <div className={style.main}>
        <header>
            <img src={logo} onClick={()=> navigate('/lyma')}/>
            <Link to='/'>SHOP</Link>
            <Link to='/reviews'>REVIEWS</Link>
            <Link to='/contact'>CONTACT US</Link>
            <Link to='/favorites'>YOUR FAVs</Link>
            <Link to='/shoppingCart'>CART</Link>
        </header>
        <Routes>
            <Route path='/*' element={<Shop/>}/>
            <Route path='/shoppingCart' element={<ShoppingCart/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path = '/reviews' element={<Reviews/>}/>
            <Route path = '/contact' element={<Contact/>}/>
            <Route path = '/lyma' element={<Lyma/>}/>

        </Routes>
    </div>
  )
}

export default App;
