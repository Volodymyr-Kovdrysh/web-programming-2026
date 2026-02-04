import React from 'react';
import Card from "../shared/Card.jsx";

const FeedbackForm = () => {
    return (
        <Card>
            <form>
                <h2>Дайте оцінку курсу</h2>
                <div className="input-group">
                    <input/>
                    <button type={'submit'}>НАДІСЛАТИ</button>
                </div>
            </form>

        </Card>
    );
};

export default FeedbackForm;