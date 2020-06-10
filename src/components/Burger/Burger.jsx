import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerIngredientTypes from './../../utils/burger-ingredient-types';

import styles from './Burger.module.css';

const burger = ({ ingredients }) => {
    const ingredientTypes = Object.keys(ingredients);

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={BurgerIngredientTypes.BREAD_TOP} />
            {
                ingredientTypes.map(ingredientType => {
                    const count = ingredients[ingredientType];

                    return [...Array(count)].map((_, index) => {
                        return <BurgerIngredient key={`${ingredientType}-${index}`} type={ingredientType} />
                    });
                })
            }
            <BurgerIngredient type={BurgerIngredientTypes.BREAD_BOTTOM} />
        </div>
    );
};

export default burger;