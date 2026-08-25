//П.3 Лич.дан. (им.,фам.,поч.,раб.,долж.,возр.,страна,гор.,сем.пол.)
const user = {
  firstName: "Вася",
  lastName: "Васечкин",
  age: 30,
  mail: "vasvas@maila.net",
  job: "Клининг",
  position: "Уборщик",
  country: "Банистан",
  city: "Банано",
  marital: "Холост"
}

//П.4 А/м (мар., мод., г.в., цв., к/п)
const car = {
  brand: "Лада",
  model: "Седан",
  color: "Баклажан",
  year: "2026",
  transmission: "ручная к/п",
  maxSpeed: 170
}
 car.carOwner = user;

//П.5 Ф-ция, прин.в кач.аргум. объект, опис.в п.4 (пров.,есть ли св-во "макс.скор.", ес.нет - доб.
      //его и зад.значен.,ес.есть - нич.не дел.)
function checkMaxSpeed (car) {
  if ("maxSpeed" in car) {
    console.log (`Параметр макс.скорости присутствует, она равна ${car.maxSpeed} км/ч`)
  } else {
    car.maxSpeed = 180;
    console.log ('Параметр "Максимальная скорость" добавлен')
  }
}

checkMaxSpeed(car);


//П.6 Ф-ция, кот.получ.перв.арг-м объект, вторым - св-во обЪекта и выв.его знач.)
function showObjProperty (user, job) {
  console.log(`Профессия пользователя ${user.firstName} ${user.lastName} - ${user.job}`)
}

showObjProperty(user, [user.job]);

//П.7 Массив,сод.назв-я прод-в (прос.строки)
const array1 = ["object1", "obj2", 6386]


//П.8 Массив из об-в, предс.собой книги (назв.,авт.,г/в,цв.обл.,жан.), 3-5кн.,
      //зат.доб. мет-м 'массив' еще 1кн в кон.спис.
const booksArray = [
  {
  title: "Holy Qoran",
  year: 9,
  author: "Allah",
  genre: "Text of Wahi (Revelation)"
  },

  {
  title: "Sakhih al-Bukhari",
  year: 233,
  author: "Muhammad ben Ismail al-Bukhari",
  genre: "Prophet's hadiths"
  },

  {
  title: "Kitab as-Sunnah",
  year: 290,
  author: "Abdullah ben Ahmad ben Hanbal",
  genre: "Aqeeda"
  },
  
  {
  title: "Muhtasar",
  author: "al-Khiraky",
  year: 334,
  genre: "Fiqh"
  },
  
]

booksArray.push( {
  title: "Masael al-Imam Ahmad",
  year: 280,
  author: "Harb ben Ismail al-Kirmani",
  genre: "Aqeeda"
})


//П.9
const booksInstrumental = [
  {
  title: "Risalah",
  author: "Muhammad ben Idris al-Shafe'ee",
  year: 204,
  genre: "Usul al-Fiqh"
  },

  {
  title: "Ma'refa Oloom al-Hadeeth",
  author: "al-Hakim an-Neisabooree",
  year: 405,
  genre: "Mustalah al-Hadeeth"
  },

  {
  title: "Alfeeya Ibn Malik",
  author: "Muhammad ben Malik at-Tai al-Andalusee",
  year: 660,
  genre: "arabic grammar"
  }
]

const booksAll = [...booksArray, ...booksInstrumental]


//П.10
// Функция принимает массив и возвращает новый массив с измененными объектами
const isSalafsAgeBooks = (array) => {
  return array.map(book => ({
    ...book,
    isSalafsAge: book.year < 257
  }));
};

// Проверяем работу:
const updatedBooks = isSalafsAgeBooks(booksAll);
console.log(updatedBooks);

//Пункт 10 не усвоен, даже с помощью ИИ((