import React from 'react';

import styles from './Layout.module.css';

const layout = ({ children }) => (
    <>
        <div className={styles.Content}>Toolbar, SideDrawer, Backdrop</div>
        <main>
            { children }
        </main>
    </>
);

export default layout;