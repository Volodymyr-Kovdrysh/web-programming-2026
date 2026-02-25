import FeedbackList from "./components/FeedbackList.jsx";
import Header from "./components/Header.jsx";

import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";

import AboutIconLink from "./components/AboutIconLink.jsx";
import {FeedbackProvider} from "./context/FeedbackContext.jsx";

const App = () => {

    return (
      <FeedbackProvider>
          <Header />
          <div className="container">
              <FeedbackForm />
              <FeedbackStat />
              <FeedbackList />

              <AboutIconLink />
          </div>

      </FeedbackProvider>
  )
}

export default App
