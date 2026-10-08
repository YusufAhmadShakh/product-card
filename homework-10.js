import { arrProducts } from "./product-cards.js";

const productsTemplate = document.getElementById("products-template");
const productsList = document.getElementById("products-list"); // используем этот элемент

// Проверь, что в arrProducts поля называются именно так: image, skinType, compound[], price
const createProductCard = (product) => `
  <div class="product">
    <img src="${product.img}" alt="${product.name}" />
    <h3 class="products__skin-type">${product.skinType}</h3>
    <h2 class="products__name">${product.name}</h2>
    <p class="products__description">${product.description}</p>
    <span>Состав: </span>
    <ul class="products__compound">
      ${product.compound
        .map((item) => `<li class="products__compound-item">${item}</li>`)
        .join("")}
    </ul>
    <div class="product__box">
      <p class="product__price">Цена: </p>
      <p class="product__sum">${product.price}</p>
    </div>
  </div>
`;

console.log(productsList);

// p.4
const arrProductsReduced = arrProducts.reduce((acc, card) => {
  acc[card.name] = card.description;
  return acc;
}, {}); // лучше пустой объект, а не массив, т.к. ты делаешь acc[card.name]

console.log(arrProductsReduced);

// p.5
// f1
const getCardsCount = () => {
  const questionCards = prompt("Выберите, сколько карточек вывести на экран (от 1 до 5)");
  const count = Number(questionCards);

  if (!Number.isInteger(count) || count > 5 || count < 1) {
    alert("Введите число от 1 до 5");
    return null;
  }

  return count;
};

const count = getCardsCount();

// Функция рендеринга карточек
const renderCards = (arrProducts, count) => {
  if (count === null || !productsList) return;

  // Берём только нужное количество карточек
  const cardsToRender = arrProducts.slice(0, count);

  productsList.innerHTML = cardsToRender.map(createProductCard).join("");
};

// Вызов функции рендеринга
renderCards(arrProducts, count);
