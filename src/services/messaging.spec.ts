import { Messaging } from './messaging';

const createsut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should call console.log once', () => {
    //System under test
    const sut = createsut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    //System under test
    const sut = createsut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
