import { Component } from 'react';
import styles from './Modal.module.css';

import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }
  componentWillUnount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }
  handleCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { children, onClose } = this.props;

    return (
      <>
        <div className={styles.backdrop} onClick={onClose}>
          <div className={styles.modalDiv}>{children}</div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
