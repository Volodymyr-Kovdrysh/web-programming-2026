import {createContext, useEffect, useState} from "react";
import {FeedbackData} from "../data/FeedbackData.js";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    useEffect(() => {
        fetchFeedback()
        // fetchTheme()
    },[])

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:3000/feedbacks')
        const data = await response.json();
        console.log(data)
        setFeedbacks(data)
        // setIsLoading(false)
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedbacks([newFeedback, ...feedbacks])
    }
    const deleteFeedback = (id) => {
        if(window.confirm("Ви впевнені, що хочете зробити це ??")){
            setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
        }

    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    const updateFeedback = (id, updItem) => {
        setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...updItem} : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    return <FeedbackContext.Provider
        value={{feedbacks, feedbackEdit,
            addFeedback, deleteFeedback, editFeedback, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>;
}

export default FeedbackContext;