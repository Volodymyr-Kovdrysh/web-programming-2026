import FeedbackList from "./components/FeedbackList.jsx";
import Header from "./components/Header.jsx";
import {FeedbackData} from "./data/FeedbackData.js";
import {useState} from "react";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";

import { v4 as uuidv4 } from 'uuid'

const App = () => {

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
    return (
      <>
          <Header bgColor={'rgba(0,0,0,0.4)'} textColor={'#ff6095'}/>
          <div className="container">
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStat
                  feedbacks={feedbacks}
              />
              <FeedbackList
                  feedbacks={feedbacks}
                  deleteFeedback={deleteFeedback}
              />
          </div>

      </>
  )
}

export default App
