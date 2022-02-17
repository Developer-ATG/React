import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Toothpaste'
          price={3}
          description='Close-up Toothpaste'
        />
      </ul>
    </section>
  );
};

export default Products;
