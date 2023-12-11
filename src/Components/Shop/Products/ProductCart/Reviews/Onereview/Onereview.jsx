import user from '.././././../../../../../img/feedback-photo-9.webp'
import './Onereview.css'
function Onereview({text,title,date}){
    return(
        <div className="onereview">
            <img src={user}/>
                <h4>{title}</h4>
                <p><i>{text}</i></p>
                <p><small>{date}</small></p>


        </div>
    )
}

export default Onereview;