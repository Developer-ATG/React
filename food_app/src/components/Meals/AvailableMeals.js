import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Vada Samabhar',
        description: 'Try our delicious Udid Vada with hot and spicy sambhar',
        price: 75,
    },
    {
        id: 'm2',
        name: 'Pav Bhaji',
        description: 'Our speciality with lots of butter!',
        price: 120,
    },
    {
        id: 'm3',
        name: 'Idli Sambhar',
        description: 'Try our delicious Idli with hot and spicy sambhar',
        price: 75,
    },
    {
        id: 'm4',
        name: 'Masala Dosa',
        description: 'Healthy...and crunchy...',
        price: 90,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) =>
        <MealItem key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
