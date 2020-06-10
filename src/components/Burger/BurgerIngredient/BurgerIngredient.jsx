import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientTypes from './../../../utils/burger-ingredient-types';

import styles from './BurgerIngredient.module.css'

const burgerIngredient = ({ type }) => {
    let ingredient = null;

    switch (type) {
        case BurgerIngredientTypes.BREAD_BOTTOM:
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case BurgerIngredientTypes.BREAD_TOP:
            ingredient = (<div className={styles.BreadTop}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
            </div>);
            break;
        case BurgerIngredientTypes.MEAT:
            ingredient = <div className={styles.Meat}></div>;
            break;
        case BurgerIngredientTypes.CHEESE:
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case BurgerIngredientTypes.SALAD:
            ingredient = <div className={styles.Salad}></div>;
            break;
        case BurgerIngredientTypes.BACON:
            ingredient = <div className={styles.Bacon}></div>;
            break;
        default: 
            ingredient = null;
    }

    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.oneOf(Object.values(BurgerIngredientTypes)).isRequired
}

export default burgerIngredient;