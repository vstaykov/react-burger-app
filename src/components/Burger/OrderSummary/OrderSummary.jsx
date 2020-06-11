import React from 'react';

const orderSummary = ({ ingredients }) => (
    <>
        <h3>Your Order</h3>
        <p>You have built a delicious burger with these ingredeints:</p>
        <ul>
            {
                Object.keys(ingredients).map(ingredient => (
                    <li key={ingredient}>
                        <span style={{textTransform: 'capitalize'}}>{ingredient}</span> x {ingredients[ingredient]}
                    </li>
                ))
            }
        </ul>
        <p>Continue to checkout?</p>
    </>
);

export default orderSummary;