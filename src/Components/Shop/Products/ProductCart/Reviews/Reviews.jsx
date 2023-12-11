import './Reviews.css';
import {useEffect, useState} from "react";
import {setReviews} from "../../../../../data/store/reviewsReducer";
import {useDispatch, useSelector} from "react-redux";
import Onereview from "./Onereview/Onereview";

function Reviews({id}){
    let[textarea, setText]=useState('')
    function textareaValuefunc(e){
        let textareaValue = e.currentTarget.value;
        setText(textareaValue);
    }
    let[title, setTitle]=useState('')
    function titleInputHandler(e){
        let titleValue = e.currentTarget.value;
        setTitle(titleValue);
    }

    let reviewsUseSelector = useSelector(state=>state.reviews.reviews)
    let dispatch = useDispatch();
    let newReviewObj={
        title:title,
        text:textarea,
        date:new Date().toLocaleDateString()
    }
    console.log(newReviewObj)

    //
    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviewsUseSelector))
    }, [reviewsUseSelector]);

    function addReviewHandler(e){
        if(textarea !== '' || title !== ''){
            dispatch(setReviews(newReviewObj))
            setText('');
            setTitle('');
        }

    }
    return(
        <div className="reviewsMain">
            <div className="otherReviews">
                {
                    reviewsUseSelector.map(el=><Onereview{...el}/>)
                }
            </div>
            <div className="addReview">
            <h2><b>add your feedback</b></h2>
            <input type="text" onChange={titleInputHandler} placeholder="title" value={title}></input>
            <textarea className="textareaReview" onChange={textareaValuefunc} value={textarea} placeholder="text"></textarea>
                <button className="reviewButton" onClick={addReviewHandler}>Add your review</button>
            </div>
        </div>
    )
}

export default Reviews;