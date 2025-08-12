import OptionColor from "./OptionColor/OptionColor";
import OptionSize from "./OptionSize/OptionSize";
import Button from "./Button/Button";
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const addDataProduct = (name, price, size, color) => {
  console.log(name,price,size,color)
}

const ProductsForm = (props) => {
  return(
    <form className={styles.form}>
      <OptionSize sizes={props.data.sizes} selectSize={props.selectSize} sizeChange={props.sizeChange} id={props.data.id}/>
      <OptionColor colors={props.data.colors} selectColor={props.selectColor} colorChange={props.colorChange} id={props.data.id}/>
      <Button onClick={(e) => {
            e.preventDefault();
            addDataProduct(props.data.name, props.getPrice(), props.selectSize, props.selectColor)}}>
            <span className="fa fa-shopping-cart" />
          </Button>
    </form>
  )
};

ProductsForm.propTypes = {
  data: PropTypes.object,
  selectColor: PropTypes.string,
  colorChange: PropTypes.func,
  selectSize: PropTypes.string,
  sizeChange: PropTypes.func,
  getPrice: PropTypes.func
}

export default ProductsForm;
