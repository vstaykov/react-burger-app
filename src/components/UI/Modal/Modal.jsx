import React from 'react';

import Backdrop from './../Backdrop/Backdrop';

import styles from './Modal.module.css';

const modal = ({ children, show, onClose }) => (
    <>
        <Backdrop show={show} onClick={onClose} />
        <div 
            className={styles.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(100vh)',
                opacity: show ? 1 : 0
        }}>
            { children }
        </div>
    </>
);

export default modal;