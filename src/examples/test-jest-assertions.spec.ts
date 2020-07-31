describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(9.996);
    expect(number).toBeCloseTo(10.001);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 22 };
    const person2 = { ...person };

    expect(person).toEqual(person2);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 22);
  });
});

describe('Testando albuma coisa', () => {
  it('descrição do teste (IT)', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Teastando mais alguma coisa', () => {
  test('descrição do teste (TEST)', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
  });
});
