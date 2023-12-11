import back from '.././../img/Rectangle (1) (1).png';
import './Lyma.css';
import Shop from "../Shop/Shop";
import {useNavigate} from "react-router-dom";

function Lyma(){
    let navigate=useNavigate()
    return(
        <div className="limaMain">
            <img className="imgLyma" src={back}/>

            <section className="bigPictureTop">
                <div className="containerInbigPictureTop">

                    <div className="textTop">
                        <p className="topTitle">FUTURE OF WELLNESS.</p>
                        <p className="topText">The perfect balance of science, nature and technology. Prepare to look and feel your absolute best.</p>
                      <div className="lymaBtn" onClick={()=>navigate('/')}><p>SHOP</p></div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Lyma;