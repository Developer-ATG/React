import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const [isOrderCheckout, setIsOrderCheckout] = useState();
  const orderHandler = () => {
    setIsOrderCheckout(true);
  }

  const modalActionBtns = (<div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      {hasItems &&
        (
          <div className={classes.total}>
            <span>{'\u20B9'} Total Amount</span>
            <span>{totalAmount}</span>
          </div>
        )
      }
      {!hasItems && (
        <div>
          <h1 className={classes.h1}>Your cart is empty :(</h1>
        </div>
      )}
      {isOrderCheckout && <Checkout onCancelOrder={props.onClose} />}
      {!isOrderCheckout && modalActionBtns}
    </Modal>
  );
};

export default Cart;