import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerIngredientTypes from './../../utils/burger-ingredient-types';

import styles from './Burger.module.css';

const burger = ({ ingredients }) => {
    const allIngredients = Object.keys(ingredients).map(ingredientType => {
        const count = ingredients[ingredientType];

        return [...Array(count)].map((_, index) => {
            return <BurgerIngredient key={`${ingredientType}-${index}`} type={ingredientType} />
        });
    })
    .reduce((arr, element) => arr.concat(element), []);

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={BurgerIngredientTypes.BREAD_TOP} />
            { allIngredients.length ? allIngredients : <p>Please start adding ingredients!</p> }
            <BurgerIngredient type={BurgerIngredientTypes.BREAD_BOTTOM} />
        </div>
    );
};

export default burger;