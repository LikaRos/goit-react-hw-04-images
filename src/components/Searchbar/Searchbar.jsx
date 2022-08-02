import { useState } from 'react';
import styles from './Searchbar.module.css';

import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };
  return (
    <>
      <header className="searchbar">
        <form className={styles.form}>
          <button type="submit" className="button" onClick={handleSubmit}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={styles.input}
            value={query}
            type="text"
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
