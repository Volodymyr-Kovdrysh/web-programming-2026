import React from 'react';

function FeedbackList({feedbacks: list }){

    return (
        <>
            <p>
                {JSON.stringify(list)}
            </p>
        </>
    );
}

export default FeedbackList;