import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import BurgerIngredientsTypes from './../../../utils/burger-ingredient-types';

import styles from './BuildControls.module.css';

const CONTROLS = [
    { type: BurgerIngredientsTypes.SALAD, label: 'Salad' },
    { type: BurgerIngredientsTypes.BACON, label: 'Bacon' },
    { type: BurgerIngredientsTypes.CHEESE, label: 'Cheese' },
    { type: BurgerIngredientsTypes.MEAT, label: 'Meat' },
];

const buildControls = ({ price, onMore, onLess, disabled }) => (
    <div className={styles.BuildControls}>
        <p>Total price: <strong>{price.toFixed(2)}</strong></p>
        { CONTROLS.map(({ type, label }) => <BuildControl key={type} label={label} onMore={() => onMore(type)} onLess={() => onLess(type)} disabled={disabled[type]} />) }
    </div>
);

export default buildControls;