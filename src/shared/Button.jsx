import React from 'react';

const Button = ({children, type='button',  isDisabled=false, variant='primary'}) => {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${variant}`}>
            {children}
        </button>
    );
};

export default Button;