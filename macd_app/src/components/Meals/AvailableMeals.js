import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import foodItem1 from '../../assets/menu/McVeggie_Burger.jpg';
import foodItem2 from '../../assets/menu/American_Cheese_Supreme_Veg.jpg';
import foodItem3 from '../../assets/menu/Mexican_Cheesy_Fries.jpg';
import foodItem4 from '../../assets/menu/Big_Spicy_Paneer_Wrap.jpg';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    imgSrc: foodItem1,
    name: 'McVeggie Burger',
    description: 'A delectable patty filled with potatoes, peas, carrots & tasty Indian spices. Topped with crispy lettuce, mayonnaise packed into toasted sesame buns.',
    price: 99,
  },
  {
    id: 'm2',
    imgSrc: foodItem2,
    name: 'American Cheese Supreme - Veg',
    description: 'A crispy corn and cheese patty covered with a slice of cheese, creamy cocktail sauce, jalapeos and shredded onions, packed between sesame buns.',
    price: 99,
  },
  {
    id: 'm3',
    imgSrc: foodItem3,
    name: 'Mexican Cheesy Fries',
    description: 'The worlds best French Fries now served with delicious cheese sauce and spicy red sauce.Serving only for a limited time!',
    price: 49,
  },
  {
    id: 'm4',
    imgSrc: foodItem4,
    name: 'Big Spicy Paneer Wrap',
    description: 'Rich & filling cottage cheese patty coated in spicy crispy batter, topped with tom mayo sauce wrapped with lettuce, onions, tomatoes & cheese',
    price: 39,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      imgSrc={meal.imgSrc}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
