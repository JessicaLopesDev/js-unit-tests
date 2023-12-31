const createMenu = require('../src/restaurant');

/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  const objeto = {
    food: { coxinha: 3.90, sanduiche: 9.90 },
    drinks: { agua: 3.90, cerveja: 6.90 },
  };
  it('Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função', () => {
    const meuRestaurante = createMenu(objeto);
    expect(typeof meuRestaurante.fetchMenu).toBe('function');
  });
  it('Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`', () => {
    const meuRestaurante = createMenu(objeto);
    const keysFetchMenu = Object.keys(meuRestaurante.fetchMenu());
    expect(keysFetchMenu).toEqual(['food', 'drinks']);
  })
  it('Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função "objetoRetornado.fetchMenu()"', () => {
    const meuRestaurante = createMenu(objeto);
    expect(objeto).toEqual(meuRestaurante.fetchMenu());
  })
  it('Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio', () => {
    const meuRestaurante = createMenu(objeto);
    const verifyIsArray = Array.isArray(meuRestaurante.consumption);
    expect(verifyIsArray).toBe(true);
  })
  it('Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro adiciona ao array consumption ou exibir a mensagem "Item indisponível"', 
  () => {
    const meuRestaurante = createMenu(objeto);
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.consumption).toEqual(["coxinha"]);
    expect(meuRestaurante.order('refrigerante')).toEqual('Item indisponível');
  });
  it('Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const meuRestaurante = createMenu(objeto);
    meuRestaurante.order('agua');
    meuRestaurante.order('cerveja');
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.consumption).toEqual(["agua", "cerveja", "coxinha"]);
  });
  it('Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`', () => {
    const meuRestaurante = createMenu(objeto);
    meuRestaurante.order('agua');
    meuRestaurante.order('agua');
    meuRestaurante.order('agua');
    expect(meuRestaurante.consumption).toEqual(["agua", "agua", "agua"]);
  });
  it('Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption', () => {
    const meuRestaurante = createMenu(objeto);
    meuRestaurante.order('agua');
    meuRestaurante.order('cerveja');
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.pay()).toBe(16.17);
  })
});