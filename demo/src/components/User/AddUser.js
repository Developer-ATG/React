import React, { useRef, useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setenteredUsername] = useState('');
    // const [enteredAge, setenteredAge] = useState('');
    const [error, seterror] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            seterror({
                title: 'Invalid Input',
                message: 'Please enter valid name and age (Non-empty values).',
            });
            return;
        }

        if (+enteredUserAge < 1) {
            seterror({
                title: 'Invalid Age',
                message: 'Please enter valid age (> 0).',
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        // setenteredUsername('');
        // setenteredAge('');
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }
    /*
    const usernameChangeHandler = (event) => {
        setenteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setenteredAge(event.target.value);
    }
    */
    const errorHandler = () => {
        seterror(null);
    }

    return (
        <div>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
