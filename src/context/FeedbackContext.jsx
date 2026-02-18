import {createContext, useState} from "react";
import {FeedbackData} from "../data/FeedbackData.js";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedbacks([newFeedback, ...feedbacks])
    }
    const deleteFeedback = (id) => {
        if(window.confirm("Ви впевнені, що хочете зробити це ??")){
            setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
        }

    }

    return <FeedbackContext.Provider
        value={{feedbacks, addFeedback, deleteFeedback}}>
        {children}
    </FeedbackContext.Provider>;
}

export default FeedbackContext;