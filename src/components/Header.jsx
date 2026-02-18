import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Feed from "../context/FeedbackContext.jsx";

const Header = ({text='Опитувальник UI',
                    bgColor='rgba(0,0,0,0.4)',
                    textColor='#ff6095'}) => {
    const ctx = useContext(Feed)
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }

        return (<>
        <header style={headerStyle}>
<div className="container">
    <h2>{text}
    </h2>
</div>

        </header>
                {JSON.stringify(ctx, null, 2)}
            </>
    );
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;