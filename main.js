//Смена цвета первой карточки
const productCard = document.querySelector('.products__cards');
const buttonChangeCardsColor = document.querySelector('#button-change-cards-color');
const blueColor = '#6d99f0';
const greenColor = '#6bed96';
const googleUrl = 'https://google.com';
buttonChangeCardsColor.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColor;
});

//Смена цвета всех карточек
const allProductCards= document.querySelectorAll('.products__cards');
const buttonChangeAllCardsColor = document.querySelector('#button-change-all-cards-color');
  buttonChangeAllCardsColor.addEventListener('click', () => {
  allProductCards.forEach((card) => card.style.backgroundColor = blueColor)
});

//Кнопка, меняющая свой собственный цвет
const buttonJust = document.querySelector('#button-just');
  buttonJust.addEventListener('click', () => {
  buttonJust.classList.toggle('button-green');
});

//Кнопка перехода на Google
const buttonOpenGoogle = document.querySelector('#button-open-google');
  buttonOpenGoogle.addEventListener('click', funcOpenGoogle);

function funcOpenGoogle() {
  const question = confirm('Перейти в Google?');
  if (question === true) {
    window.open(googleUrl)
  } 
  else { 
    return;
  }
}

// Вывод consoleLog
const buttonOutputLog = document.querySelector('#button-output-console-log');
buttonOutputLog.addEventListener('click', () => outputConsoleLog('ДЗ №6'));
function outputConsoleLog(message) {
  alert(message)
  console.log(message);
}

//Вывод контента в консоль
const titleToLog = document.querySelector(".main-title")
titleToLog.addEventListener("mouseenter", () => {
  console.log(titleToLog.textContent);
})

