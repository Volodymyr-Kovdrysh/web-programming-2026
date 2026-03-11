import {createContext, useEffect, useState} from "react";
import {FeedbackData} from "../data/FeedbackData.js";
import { v4 as uuidv4 } from 'uuid'
import getDataFromGoogleAppScripts from "../data/Utils.js";
const FeedbackContext = createContext()

const GOOGLE_URL = import.meta.env.VITE_apiURL

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    useEffect(() => {
        fetchFeedback()
        // fetchTheme()
    },[])

    const fetchFeedback = async () => {
        // const response = await fetch('http://localhost:3000/feedbacks')
        // const data = await response.json();
        // console.log(data)
        // setFeedbacks(data)
        // setIsLoading(false)
        getDataFromGoogleAppScripts(`${GOOGLE_URL}?method=GET`).then( data => {
            console.log('GET',data)
            setFeedbacks(data.feedbacks)
            setIsLoading(false)
        })
    }

    const addFeedback = async (newFeedback) => {
        // const response = await fetch('http://localhost:3000/feedbacks', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(newFeedback),
        // })
        //
        // const data = await response.json()
        // setFeedbacks([data, ...feedbacks])

        newFeedback.id = uuidv4()
        setIsLoading(true)
        getDataFromGoogleAppScripts(`${GOOGLE_URL}?method=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then( data => {
            console.log('POST',data)
            setFeedbacks(data.feedbacks)
            setIsLoading(false)
        })

    }
    const deleteFeedback = async (id) => {
        if(window.confirm("Ви впевнені, що хочете зробити це ??")){
            // const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
            //     method: 'DELETE',
            // })
            // const data = await response.json();
            // console.log("DELETE", data)
            // setFeedbacks(feedbacks.filter(feedback => feedback.id !== data.id))
            setIsLoading(true)
            getDataFromGoogleAppScripts(`${GOOGLE_URL}?method=DELETE&id=${id}`).then( data => {
                console.log('DELETE',data)
                setFeedbacks(data.feedbacks)
                setIsLoading(false)
            })
        }

    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updItem),
        })
        const data = await response.json()
        console.log('UPDATE', data)

        setFeedbacks(feedbacks.map(item => item.id === data.id ? {...item, ...data.updItem} : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    return <FeedbackContext.Provider
        value={{feedbacks, feedbackEdit, isLoading,
            addFeedback, deleteFeedback, editFeedback, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>;
}

export default FeedbackContext;