import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Setten', '489.874.658-74');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Setten');
    expect(sut).toHaveProperty('cpf', '489.874.658-74');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Luiz', 'Setten', '489.874.658-74');
    expect(sut.getName()).toBe('Luiz Setten');
    expect(sut.getIDN()).toBe('489.874.658-74');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Luiz', '489.874.658-74');
    expect(sut).toHaveProperty('name', 'Luiz');
    expect(sut).toHaveProperty('cnpj', '489.874.658-74');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Luiz', '489.874.658-74');
    expect(sut.getName()).toBe('Luiz');
    expect(sut.getIDN()).toBe('489.874.658-74');
  });
});
