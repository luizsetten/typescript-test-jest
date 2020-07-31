import {
  Discount,
  FifityPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createsut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no duscount', () => {
    const sut = createsut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createsut(FifityPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createsut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
