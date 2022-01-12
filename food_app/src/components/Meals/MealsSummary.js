import React from 'react'
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food Delivery, now at your door step!</h2>
            <p>Want to eat something delicious right now?</p>
            <p>If something tastes better than you expected, 
                you could use the word wow to express your surprise. 
                If you say something tastes amazing, you’re saying it 
                tastes even better than great or really good.</p>
        </section>
    )
}

export default MealsSummary;
