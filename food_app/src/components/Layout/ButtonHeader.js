import React from 'react';
import classes from './ButtonHeader.module.css';
import CartIcon from '../Cart/CartIcon';


const ButtonHeader = (props) => {
    return (
        <button className={classes.button} onClick={props.onClickFromHeader}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default ButtonHeader
