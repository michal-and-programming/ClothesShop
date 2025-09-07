import styles from '../ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}

const OptionColor = (props) => {
  return(
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map(color => (
            <li key={color}>
              <button type="button" 
                className={clsx(prepareColorClassName(color), color === props.selectColor && styles.active)} 
                onClick={() => props.colorChange(props.id, color)}>
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
};

OptionColor.propTypes = {
  colors: PropTypes.array,
  selectColor: PropTypes.string,
  colorChange: PropTypes.func,
  id: PropTypes.number
}

export default OptionColor;
