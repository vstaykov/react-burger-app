import React, { Component } from 'react';

import Burger from './../../components/Burger/Burger';
import BurgerIngredientTypes from './../../utils/burger-ingredient-types';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        const ingredients = {};
        ingredients[BurgerIngredientTypes.SALAD] = 0;
        ingredients[BurgerIngredientTypes.CHEESE] = 0;
        ingredients[BurgerIngredientTypes.MEAT] = 0;

        this.state = { ingredients };
    }

    render() {
        const { ingredients } = this.state;

        return (
            <>
                <Burger ingredients={ingredients} />
                <div>Burger Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;