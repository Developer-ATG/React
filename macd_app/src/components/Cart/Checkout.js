import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const Checkout = (props) => {
    const nameRef = useRef();
    const addressRef = useRef();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
    });

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredAddress = addressRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);

        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredAddressIsValid

        if (!formIsValid) {
            return;
        }

    };

    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const addressControlClasses = `${classes.control} ${formInputsValidity.address ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} placeholder='Enter your name here!' />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={addressControlClasses}>
                <label htmlFor='address'>Address</label>
                <textarea rows="2" id='address' ref={addressRef} placeholder='Fill your full delivery address here!'></textarea>
                {!formInputsValidity.address && <p>Please enter a delivery address!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancelOrder}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;