import { Component } from 'react';
import styles from './Searchbar.module.css';

import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;
    return (
      <>
        <header className="searchbar">
          <form className={styles.form}>
            <button
              type="submit"
              className="button"
              onClick={this.handleSubmit}
            >
              <span className="button-label">Search</span>
            </button>

            <input
              className={styles.input}
              value={query}
              type="text"
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
