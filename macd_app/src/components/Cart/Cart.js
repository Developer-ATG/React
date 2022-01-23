import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderDidSubmit, setOrderDidSubmit] = useState(false);

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

  /**
   * Add user data to database
   * @param {*} userData 
   */
  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    fetch('https://react-http-demo-98bc6-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderdItems: cartCtx.items
      })
    })
    setIsSubmitting(false);
    setOrderDidSubmit(true);
    cartCtx.emptyCart();
  }

  const modalActionBtns = (<div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>);

  const cartModalContent = <React.Fragment>
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
    {isOrderCheckout && <Checkout onCancelOrder={props.onClose} onConfirm={submitOrderHandler} />}
    {!isOrderCheckout && modalActionBtns}
  </React.Fragment>


  const isSubmittingOrder = <p>Pushing your order to kitchen kindly wait!</p>
  const didSubmitModalContent = <p>Restaurant has accepted your order!</p>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !orderDidSubmit && cartModalContent}
      {isSubmitting && isSubmittingOrder}
      {orderDidSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
