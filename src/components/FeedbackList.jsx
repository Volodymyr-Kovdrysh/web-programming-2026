import React from 'react';
import FeedbackItem from "./FeedbackItem.jsx";

function FeedbackList({feedbacks: list , deleteFeedback}){

    if (!list || list.length === 0) {
        return <p>
            Ще немає відгуків
        </p>
    }

    return (
        <div className={'feedback-list'}>

            {list.map(item => <FeedbackItem
            deleteFeedback={deleteFeedback}
                feedback={item} key={item.id}/>)}

        </div>
    );
}

export default FeedbackList;