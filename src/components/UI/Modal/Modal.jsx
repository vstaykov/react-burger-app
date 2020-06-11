import React from 'react';

import styles from './Modal.module.css';

const modal = ({ children }) => (
    <div className={styles.Modal}>
        { children }
    </div>
);

export default modal;