import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 100, date: new Date(2022, 0, 18) },
  { id: 'e2', title: 'New TV', amount: 500, date: new Date(2021, 1, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 300, date: new Date(2020, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 350, date: new Date(2019, 3, 2) },
  { id: 'e5', title: 'Laptop Maintainance', amount: 400, date: new Date(2022, 4, 12) },
  { id: 'e6', title: 'Car', amount: 450, date: new Date(2021, 5, 1) },
  { id: 'e7', title: 'Book', amount: 500, date: new Date(2020, 6, 1) },
  { id: 'e8', title: 'House rent', amount: 600, date: new Date(2019, 7, 2) },
  { id: 'e9', title: 'Laptop', amount: 300, date: new Date(2022, 8, 2) },
  { id: 'e10', title: 'Elec Bill', amount: 100, date: new Date(2021, 9, 3) },
  { id: 'e11', title: 'Washing Machine', amount: 500, date: new Date(2020, 10, 3) },
  { id: 'e12', title: 'Toaster', amount: 500, date: new Date(2019, 11, 15) },
];


function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = expense => (
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  )

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
