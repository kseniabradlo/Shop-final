import preloader from './preloader.gif';
import './Preloader.css';

function Preloader(){
    return(
        <div className="preloader">
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;