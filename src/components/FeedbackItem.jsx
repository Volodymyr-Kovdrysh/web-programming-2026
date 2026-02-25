import React, {useContext} from 'react';
import Card from "../shared/Card.jsx";
import {FaEdit, FaTimes} from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedbackItem = ({feedback}) => {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="close" onClick={(e)=>{
                deleteFeedback(feedback.id)
            }
            }>
                <FaTimes color="purple"/>
            </button>
            <button className="edit" onClick={(e)=>{
                editFeedback(feedback)
            }
            }>
                <FaEdit color="purple"/>
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

export default FeedbackItem;