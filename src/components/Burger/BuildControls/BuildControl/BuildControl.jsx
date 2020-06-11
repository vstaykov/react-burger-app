import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = ({ label, onMore, onLess, disabled }) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button className={styles.Less} onClick={onLess} disabled={disabled}>Less</button>
        <button className={styles.More} onClick={onMore}>More</button>
    </div>
);

export default buildControl;