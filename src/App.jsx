import FeedbackList from "./components/FeedbackList.jsx";
import Header from "./components/Header.jsx";
import {FeedbackData} from "./data/FeedbackData.js";
import {useState} from "react";


const App = () => {

    const [feedbacks, setFeedbacks] = useState(FeedbackData)

    return (
      <>
          <Header bgColor={'rgba(0,0,0,0.4)'} textColor={'#ff6095'}/>
          <div className="container">
              <FeedbackList f={'foo'} boo={'boo'} feedbacks={feedbacks}/>
          </div>

      </>
  )
}

export default App
