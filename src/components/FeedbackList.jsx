import React, {useContext} from 'react';
import {motion} from "motion/react"
import FeedbackItem from "./FeedbackItem.jsx";
import FeedbackContext from "../context/FeedbackContext.jsx";

function FeedbackList(){
    const {feedbacks: list, deleteFeedback} = useContext(FeedbackContext);
    if (!list || list.length === 0) {
        return <p>
            Ще немає відгуків
        </p>
    }

    return (
        <div className={'feedback-list'}>

            {list.map(item => <motion.div
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
            <FeedbackItem
            deleteFeedback={deleteFeedback}
                feedback={item} />
            </motion.div>)}

        </div>
    );
}

export default FeedbackList;