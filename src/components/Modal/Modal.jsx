import styles from './Modal.module.css';
import { useEffect } from 'react';

import PropTypes from 'prop-types';
export function Modal({ children, onClose }) {
  useEffect(() => {
    const handleCloseModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, []);

  return (
    <>
      <div className={styles.backdrop} onClick={onClose}>
        <div className={styles.modalDiv}>{children}</div>
      </div>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
