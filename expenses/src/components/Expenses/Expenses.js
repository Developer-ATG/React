import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from './ExpensesList';

import './Expenses.css';
import '../NewExpense/ExpensesFilter.css';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filterdYear, setFilterdYear] = useState('2019');

    const filterChangeHandler = selectedYear => {
        setFilterdYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterdYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYearDefault={filterdYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;