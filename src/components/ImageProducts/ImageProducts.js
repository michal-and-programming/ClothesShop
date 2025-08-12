import styles from './ImageProducts.module.scss';

const ImageProducts = (props) => {
  return(
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.alt}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
    </div>
  )
};

export default ImageProducts;