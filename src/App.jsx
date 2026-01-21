import FeedbackList from "./components/FeedbackList.jsx";
import Header from "./components/Header.jsx";
import {FeedbackData} from "./data/FeedbackData.js";
import {useState} from "react";


const App = () => {

    const [feedbacks, setFeedbacks] = useState(FeedbackData)

    return (
      <>
          <Header />
          <FeedbackList f={'foo'} boo={'boo'} feedbacks={feedbacks}/>
      </>
  )
}

export default App
