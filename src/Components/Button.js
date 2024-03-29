import React from "react";
import { Link } from "react-router-dom";
import "./../Css/Button.css";


const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--medium','btn-large']

export const Button = ({
    type,
    buttonStyle,
    buttonSize,
    children,
    onClick
    }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]

    return(
        <Link to='/sign-up' className="btn-mobile">
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}