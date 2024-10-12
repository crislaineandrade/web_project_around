const openButton = document.querySelector('.profile__image-edit-button'); //botao de editar
const closeButton = document.querySelector('.popup__close-button'); //botao x de fechar
const formElement = document.querySelector('.popup'); //formulario (popup)
//pegar o que esta escrito no h1 (nome)
const nameUser = document.querySelector('.profile__user') // nome do usuario
//pegar o que esta escrito no paragrafo (ocupacao)
const ocupationUser = document.querySelector('.profile__paragraph') //ocupacao do usuario
const saveButton = document.querySelector('.popup__save-button') //botao de salvar
const inputName = document.querySelector('.popup__name') //input do nome
const inputOcupation = document.querySelector('.popup__ocupation') //input da ocupacao

function openForm() {
  formElement.classList.add('popup_opened')
}
openButton.addEventListener('click', openForm);

function closeForm() {
  formElement.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeForm);


function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameUser.textContent = inputName.value;
  ocupationUser.textContent = inputOcupation.value;
  closeForm();
}

formElement.addEventListener('submit', handleProfileFormSubmit);

