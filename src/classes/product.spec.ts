import { Product } from './product';

const createsut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createsut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
