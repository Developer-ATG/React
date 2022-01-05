import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser(props) {
    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredAge, setenteredAge] = useState('');
    const [error, seterror] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            seterror({
                title: 'Invalid Input',
                message: 'Please enter valid name and age (Non-empty values).',
            });
            return;
        }

        if (+enteredAge < 1) {
            seterror({
                title: 'Invalid Age',
                message: 'Please enter valid age (> 0).',
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        setenteredUsername('');
        setenteredAge('');
        props.onAddUser(enteredUsername, enteredAge);
    }

    const usernameChangeHandler = (event) => {
        setenteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setenteredAge(event.target.value);
    }

    const errorHandler = () => {
        seterror(null);
    }
    // const errorHandler = () => {

    // }

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
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor='age'>Age</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
