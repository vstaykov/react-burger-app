import React, { Component } from 'react';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import BurgerIngredientTypes from './../../utils/burger-ingredient-types';
import BurgerIngredientPrices from './../../utils/burger-ingredient-prices';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        const ingredients = {};
        ingredients[BurgerIngredientTypes.SALAD] = 0;
        ingredients[BurgerIngredientTypes.BACON] = 0;
        ingredients[BurgerIngredientTypes.CHEESE] = 0;
        ingredients[BurgerIngredientTypes.MEAT] = 0;

        this.state = { ingredients, totalPrice: 4, canOrder: false };
    }

    onMoreHandler = type => {
        const ingredients = { ...this.state.ingredients };
        ingredients[type] += 1;

        const updatedPrice = this.state.totalPrice + BurgerIngredientPrices[type];

        this.setState({
            ingredients,
            totalPrice: updatedPrice
        });

        this._updateCanOrder(ingredients);
    };

    onLessHandler = type => {
        const shouldUpdateIngredients = this.state.ingredients[type] > 0;

        if (shouldUpdateIngredients) {
            const ingredients = { ...this.state.ingredients };
            ingredients[type] -= 1;
    
            const updatedPrice = this.state.totalPrice - BurgerIngredientPrices[type];
    
            this.setState({
                ingredients,
                totalPrice: updatedPrice
            });

            this._updateCanOrder(ingredients);
        }
    };

    _getDisabledControlsInfo = () => {
        const disabledInfo = {};
        const { ingredients } = this.state;

        Object.keys(ingredients).forEach(ingredient => disabledInfo[ingredient] = ingredients[ingredient] <= 0);

        return disabledInfo;
    };

    _updateCanOrder = ingredients => {
        const ingredientsCount = Object.values(ingredients).reduce((sum, count) => sum + count, 0);

        this.setState({ canOrder: ingredientsCount > 0 });
    };

    render() {
        const { ingredients, totalPrice, canOrder } = this.state;
        const disabledInfo = this._getDisabledControlsInfo();

        return (
            <>
                <Burger ingredients={ingredients} />
                <BuildControls 
                    price={totalPrice}
                    onMore={this.onMoreHandler}
                    onLess={this.onLessHandler}
                    disabled={disabledInfo}
                    canOrder={canOrder}
                />
            </>
        );
    }
}

export default BurgerBuilder;