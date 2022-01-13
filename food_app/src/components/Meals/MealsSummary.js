import React from 'react'
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food Delivery, now at your door step!</h2>
            <p>Want to eat something delicious right now? Discover the best food and drinks</p>
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in your area, based on trends</p>
        </section>
    )
}

export default MealsSummary;
