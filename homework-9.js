//Ch.1
//p.1-4
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrNumbers2 = arrNumbers.slice(4,10)
console.log(arrNumbers2)
const arrStrings = [
  "Акыда",
  "Фикх",
  "Коран",
  "Хадис",
  "Тафсир"
]

const searchItem = 'Сарф';

const hasItem = arrStrings.includes(searchItem);

if (hasItem) {
  console.log(`Да, ${searchItem} содержится в массиве`)}
else {
  console.log(`Нет, элемента ${searchItem} нет в массиве`)
}

function reversingArray (array) {
  return array.reverse()
}

const revArr1 = reversingArray(arrNumbers2)
const revArr2 = reversingArray(arrStrings)
console.log(`${revArr1} ${revArr2}`)

//Ch.2 
import { arrComments } from './comments.js';
//console.log(arrComments)

const arrCommentsWithDotCom = arrComments.filter(comment => comment.email.includes('.com'))
const setPostId = arrComments.map(comment => comment.id <= 5 ? comment.postId = 2 : 1)
console.log(`Установление PostID в зависимости от порядкового номера`, setPostId)

//p.9
const filteredComments = arrComments.map(({ name, email }) => ({ name, email }));
console.log(`Массив почты авторов комментов`, filteredComments)

//p.10
const arrCommentsValidation = arrComments.map(comment => {
  const isInvalid = comment.body.length > 180;
  return {
    ...comment,
    isInvalid
    };
});

console.log(`Добавление ключа isInvalid в массив`, arrCommentsValidation)

//Ch.3
//p.11
const arrMailsReduce = arrComments.reduce((acc,comment) => 
  {acc.push(comment.email); 
  return acc   },[] )
console.log(`Массив почты методом reduce`, arrMailsReduce)

const arrMailsMap = arrComments.map(comment => comment.email)
console.log(`Массив почты методом map`, arrMailsMap)

//p.12
console.log(`Массив почты в виде строки (toString)`, arrMailsMap.toString());
console.log(`Массив почты в виде строки (join())`, arrMailsMap.join(' | '))
console.log(`Время и дата загрузки страницы: `, Date().toString(), ` спасибо, что остаетесь с нами!`);