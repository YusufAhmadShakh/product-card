const footerForm = document.getElementById("subscribe-form");
const footerEmail = document.getElementById("email-input");

footerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!footerEmail.checkValidity()) {
    alert("Введите корректный email");
    return;
  }
  console.log({email: footerEmail.value});
  footerForm.reset();
});

let user = null;

const openBtn = document.getElementById("open-register"); //Обращение к кнопке "Регистрация"
const closeBtn = document.getElementById("close-register"); // кнопка "х"

const modal = document.getElementById("register-modal"); //модал. окно
const overlay = document.getElementById("overlay"); //затемнение
const registerForm = document.getElementById("register-form"); //обр. к тегу формы

//Открытие модалки и тени
const openModal = () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-showed");
};

//Закрытие модалки и тени
const closeModal = () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
};

openBtn.addEventListener("click", openModal); //запуск функции openModal при клике на кнопку "Регистрация"
closeBtn.addEventListener("click", closeModal); //закрытие ("х")
overlay.addEventListener("click", closeModal); //закрытие при клике на теневую обл

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries());

  if (!registerForm.checkValidity()) {
    alert("Регистрация отклонена, введите корректные данные");
    return;
  }

  if (data.password !== data.passwordRepeat) {
    alert ("Регистрация отклонена, пароли не совпадают");
    return;
  }

  delete data.passwordRepeat;

  user = {
    ...data,
    createdOn: new Date(),
  };

  console.log(user);

  registerForm.reset();
  closeModal();
  });
