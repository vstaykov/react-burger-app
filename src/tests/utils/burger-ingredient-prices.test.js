import types from '../../utils/burger-ingredient-types';
import prices from '../../utils/burger-ingredient-prices';

describe('burger-ingredient-prices', () => {
  it('should return correct price for salad', () => {
    const price = prices[types.SALAD];

    expect(price).toEqual(0.5);
  })
});