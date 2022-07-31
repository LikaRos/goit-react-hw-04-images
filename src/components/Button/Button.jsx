import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ textContent, handlerClick }) {
  return (
    <button className={styles.btn} type="button" onClick={handlerClick}>
      {textContent}
    </button>
  );
}

Button.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  textContent: PropTypes.string.isRequired,
};
