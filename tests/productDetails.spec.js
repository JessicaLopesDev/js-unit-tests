const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const products = productDetails('Alcool gel', 'Máscara');
    const verifyIsArray = Array.isArray(products);
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    
    // Teste se o retorno da função é um array.
    expect(verifyIsArray).toBe(true);
    
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(products.length).toBe(2);
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof products[0] && typeof products[1]).toBe('object');
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(products[0]).not.toBe(products[1]);
    
    // Teste se os dois productIds terminam com 123.
    expect(products[0].details.productId).toMatch('123');
    expect(products[1].details.productId).toMatch('123');
  });
});


