import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';


const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartToggleHandler = () => {
		dispatch(cartActions.toggleCartItems());
	}

	return (
		<button onClick={cartToggleHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
