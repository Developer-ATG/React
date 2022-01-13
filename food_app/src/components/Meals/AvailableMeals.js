import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'American Cheese Supreme - Veg',
        description: 'A crispy corn and cheese patty covered with a slice of cheese, creamy cocktail sauce, jalapeos and shredded onions, packed between sesame',
        price: 75,
    },
    {
        id: 'm2',
        name: 'McVeggie Burger',
        description: 'A delectable patty filled with potatoes, peas, carrots & tasty Indian spices. Topped with crispy lettuce, mayonnaise packed into toasted sesame buns.',
        price: 120,
    },
    {
        id: 'm3',
        name: 'Mexican Cheesy Fries',
        description: "The worlds best French Fries now served with delicious cheese sauce and spicy red sauce.Serving only for a limited time!",
        price: 75,
    },
    {
        id: 'm4',
        name: 'Veg Maharaja Mac + Mexican Cheesy Fries',
        description: '10% off! on this combo of Veg Maharajac Mac + Mexican Cheesy Fries',
        price: 90,
    },
    {
        id: 'm5',
        name: 'Maharaja Pizza',
        description: 'Two loaded pizzas with a generous spread of paneer chunks, delicious veggies and the choice of 4 cheese flavours.',
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
