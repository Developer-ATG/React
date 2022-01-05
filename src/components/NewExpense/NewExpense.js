import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setshowForm] = useState(false);                    //variable for set value for show/hide functionality

    /**
     * Dynamically render form data on to the expense card
     */
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setshowForm(false);
    }

    /**
     * Handling show/hide functionality of the form
     */
    const showFormHandler = () => {
        setshowForm(true);
    }

    const hideFormHandler = () => {
        setshowForm(false);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={hideFormHandler} />
            }
        </div>
    );
}

export default NewExpense;
