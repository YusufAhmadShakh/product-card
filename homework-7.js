//П.3 Город-температура
function showWeather(city, temperature) {
  console.log(`Сейчас в городе ${city} температура - ${temperature} градусов по цельсию`);
  return '';
}
showWeather ('Мекка', '45');

//П.4 Сравнение скоростей
const LIGHT_SPEED = (299792458);
function checkSpeed (speed, LIGHT_SPEED) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость')
  } 
  else if (speed === LIGHT_SPEED) {
    console.log('Скорость света')
}
  else {
    console.log ('Субсветовая скорость')
  }
}

let speed = 490792458;
checkSpeed (speed, LIGHT_SPEED);

//П.5 Покупка товара
const product = "Арабско-русский словарь";
const price = 1000;
function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference} рупий, пополните баланс`);
  }
}
buyProduct(1000)

//П.6 Произвольная функция
setTimeout(() => hello('Атлан'), 2000);
function hello(name) {
  alert(`Ассаляму алейкум, ${name}!`)
}

//П.7 Произвольные переменные
const name = 'Уолтер'
let surname = 'Уайт'
var fullName = name + ' ' + surname
console.log(fullName)
console.log("(тупо передрал у Доки)")