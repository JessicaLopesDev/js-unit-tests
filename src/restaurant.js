const objeto = {
  food: { coxinha: 3.90, sanduiche: 9.90 },
  drinks: { agua: 3.90, cerveja: 6.90 },
};
const arrayDrinksKeys = Object.keys(objeto.drinks);
const arrayFoodKeys = Object.keys(objeto.food);

const orderProduct = (product, array) => {
  if (arrayDrinksKeys.includes(product) || arrayFoodKeys.includes(product)) {
    array.push(product);
    return;
  }
    return 'Item indisponível';
};

const paymentCalc = (array) => {
  let totalPayment = 0;

  for (let index of array) {
    if (arrayFoodKeys.includes(index)) {
      totalPayment += objeto.food[index]; 
    }
    if (arrayDrinksKeys.includes(index)) {
      totalPayment += objeto.drinks[index]; 
    }
  }
  return totalPayment * 1.1;
};

const createMenu = (obj) => {
  let arrayConsumption = [];

  const newObj = {
    fetchMenu: () => obj,
    consumption: arrayConsumption,
    order: (product) => orderProduct(product, arrayConsumption),
    pay: () => paymentCalc(arrayConsumption),
  };
  return newObj;
};

// const meuRestaurante = createMenu(objeto);
// meuRestaurante.order('coxinha');
// meuRestaurante.order('cerveja');
// console.log(meuRestaurante.consumption);
// console.log(meuRestaurante.pay());

module.exports = createMenu;
