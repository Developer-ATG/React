import { Fragment } from 'react';
import classes from './Header.module.css';
import bannerIMage from '../../assets/banner.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>YourMeals.com</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={bannerIMage} alt='Order Food Online anywhere!' />
            </div>
        </Fragment>
    )
}

export default Header;
