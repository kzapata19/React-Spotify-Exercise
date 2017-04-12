import React, { PropTypes } from 'react';
import styles from './SeachBar.css';

const SearchBar = (props) => (
  <div className={styles.root}>
    <input className={styles.input} onChange={(e) => props.updateText(e.target.value)} />
  </div>
);

export default SearchBar;
