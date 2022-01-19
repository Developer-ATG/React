import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes.card}>
        {/* <img src={props.imgSrc} alt={props.name} /> */}
        <h1>{props.name}</h1>
        <p className={classes.price}>{'\u20B9'} {price}</p>
        <p>{props.description}</p>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  )
};

export default MealItem;
