import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  /**
   * Fetch menu data from database
   */
  useEffect(() => {
    const fetchMeals = async () => {
      setisLoading(true);
      const response = await fetch('https://react-http-demo-98bc6-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Unable to load the menu! Try after sometime');
      }
      const responseData = await response.json();

      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals);
      setisLoading(false);
    };

    fetchMeals().catch((error) => {
      setisLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loader}>
        Loading...
      </div>
    );
  }

  if (httpError) {
    return (
      <div className={classes.httpError}>
        <p>{httpError}</p>
      </div>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      // imgSrc={meal.imgSrc}
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
