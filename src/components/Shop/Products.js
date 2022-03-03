import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS  = [
  {
    id: 'p1',
    price: 6,
    title: 'First Book',
    description:  'The first book'
  },
  {
    id: 'p2',
    price: 5,
    title: 'Pen',
    description:  'The first pen'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
        <ProductItem
        title={item.title}
        price={item.price}
        description={item.description}
        key={item.id}
        id={item.id}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
