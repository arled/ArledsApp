import { updateTotalPrice } from './cart';

const mockProducts = [
  {
    id: 1,
    title: '',
    price: 109.95,
    description: '',
    image: '',
  },
  {
    id: 2,
    title: '',
    price: 22.3,
    description: '',
    image: '',
  },
  {
    id: 4,
    title: '',
    price: 15.99,
    description: '',
    image: '',
  },
  {
    id: 7,
    title: '',
    price: 9.99,
    description: '',
    image: '',
  },
  {
    id: 6,
    title: '',
    price: 168,
    description: '',
    image: '',
  },
];

describe('updateTotalPrice', () => {
  it('should update cart total price correctly', () => {
    const totalPrice = updateTotalPrice(mockProducts);
    expect(totalPrice).toEqual('326.23');
  });
});
