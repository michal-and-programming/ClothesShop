import styles from '../ProductForm.module.scss';
import clsx from "clsx";
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => (
          <li key={size.name}>
            <button type='button' className={clsx(size.name === props.selectSize && styles.active)} onClick={() => props.sizeChange(props.id, size.name)}>
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};

OptionSize.propTypes = {
  sizes: PropTypes.array,
  selectSize: PropTypes.string,
  sizeChange: PropTypes.func,
  id: PropTypes.number
}

export default OptionSize;