import ImageProducts from '../ImageProducts/ImageProducts';
import ProductsForm from '../ProductsForm/ProductsForm';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';

const Product = props => {

   const getPrice = () => {
    const chosenSize = props.data.sizes.find(size => size.name === props.currentSize);
    const additionalPrice = chosenSize ? chosenSize.additionalPrice : 0;
    const productPrice = props.data.basePrice + additionalPrice;
    return productPrice;
  }

  return (
    <article className={styles.product}>
      <ImageProducts alt={props.data.title}/>
      <div>
        <header>
          <h2 className={styles.name}>{ props.data.title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <ProductsForm
          data={props.data}
          selectColor={props.currentColor}
          colorChange={props.colorChange}
          selectSize={props.currentSize}
          sizeChange={props.sizeChange}
          getPrice={getPrice}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  data: PropTypes.object,
  currentColor: PropTypes.string,
  colorChange: PropTypes.func,
  currentSize: PropTypes.string,
  sizeChange: PropTypes.func
};

export default Product;
