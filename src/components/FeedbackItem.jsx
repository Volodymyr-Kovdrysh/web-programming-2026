import React from 'react';
import Card from "../shared/Card.jsx";
import {FaTimes} from "react-icons/fa";

const FeedbackItem = ({feedback, deleteFeedback}) => {
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="close" onClick={(e)=>{
                deleteFeedback(feedback.id)
            }
            }>
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">Text</div>
            {JSON.stringify(feedback, null, 2)}
        </Card>
    );
};

export default FeedbackItem;