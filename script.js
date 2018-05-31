let yourBudget,
    yourBudgetDay,
    nameYourStore,
    time = 19;

yourBudget = prompt('Ваш бюджет на месяц?');
nameYourStore = prompt('Название вашего магазина?');

let mainList = {
  budget: yourBudget,
  nameStore: nameYourStore,
  shopGoods: [],
  employers: {},
  open: false
}

for (let i = 0; i < 5; i++ ) {
  let a = prompt('Какой тип товара будем продавать?');

  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a; 
    } else {
        console.log('Неверные данные введите по новой');
        i = --i; //обнуляет счетчик и нужно вводить 5 товаров по новой
      }
};


//цикл while

/*let i = 0;
while (i < 5) {
  let a = prompt('Какой тип товара будем продавать?');

  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a; 
      i++;
    } else {
        console.log('Неверные данные введите по новой');
        i = -i; //обнуляет счетчик и нужно вводить 5 товаров по новой
      }
}*/

//цикл do while

/*let i = 0;
do {
  let a = prompt('Какой тип товара будем продавать?');

  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a; 
      i++;
    } else {
        console.log('Неверные данные введите по новой');
        i = -i; //обнуляет счетчик и нужно вводить 5 товаров по новой
      }
} while (i < 5);*/


if (time < 0) {
  console.log('не может быть');
  } else if (time > 8 && time < 20){
      console.log('время работать');
    } else if (time < 24) {
        console.log('Слишком поздно');
      } else {
    console.log('В сутках 24 часа');
    }

console.log(mainList.budget / 30);
console.log(mainList);