import React, {useContext, useState} from 'react';
import Card from "../shared/Card.jsx";
import RatingSelect from "./RatingSelect.jsx";
import Button from "../shared/Button.jsx";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedbackForm = () => {
    const {addFeedback: handleAdd} = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(9);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState(null);

    const handleTextChange=(e) =>{
        // console.log(e.target.value)
if (text === ''){
    setBtnDisabled(true);
    setMessage(null)
}else if(text !== '' && text.trim().length < 10){
    setMessage("Текст повинен містити щонайменше 10 симовлів")
            setBtnDisabled(true)
        }
else {
    setMessage(null)
    setBtnDisabled(false)
}

        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 0){
            const newFeedback = {rating, text }

            handleAdd(newFeedback);
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Дайте оцінку курсу</h2>

                <RatingSelect select={setRating}/>

                <div className="input-group">
                    <input type="text" value={text} onChange={handleTextChange}/>
                    <Button
                        type={'submit'}
                        isDisabled={btnDisabled}
                    >НАДІСЛАТИ</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>

        </Card>
    );
};

export default FeedbackForm;