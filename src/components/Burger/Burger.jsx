import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerIngredientTypes from './../../utils/burger-ingredient-types';

import styles from './Burger.module.css';

const burger = props => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={BurgerIngredientTypes.BREAD_TOP} />
            <BurgerIngredient type={BurgerIngredientTypes.CHEESE} />
            <BurgerIngredient type={BurgerIngredientTypes.MEAT} />
            <BurgerIngredient type={BurgerIngredientTypes.BREAD_BOTTOM} />
        </div>
    );
};

export default burger;