import React from 'react';

import styles from './Backdrop.module.css';

const backdrop = ({ show, onClick }) => show ? <div className={styles.Backdrop} onClick={onClick}></div> : null;

export default backdrop;