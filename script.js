import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import { closeModal, pressEscCloseModal, clickOutCloseModal, formElement, formAddImage, popupImage } from './utils.js';


// ------------VARIAVEIS---------


const config = {
  input: 'input',
  submitButton: '.form__submit',
  inactiveButtonClass: '.form__submit_inactive',
  errorClass:'popup__form_name-input-error_active'
}


//pegar o que esta escrito no h1 (nome)
const nameUser = document.querySelector('.profile__user') // nome do usuario
//pegar o que esta escrito no paragrafo (ocupacao)
const ocupationUser = document.querySelector('.profile__paragraph');
//input do nome
const inputName = document.querySelector('.popup__name');
//input da ocupacao
const inputOcupation = document.querySelector('.popup__ocupation');


//onde var ser adcionado (ul)
const containerUl = document.querySelector('.elements__cards');

//formulario de criar imagem
const formCreateImage = document.querySelector('.popup-edit__form')

const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImageImg = document.querySelector('.popup-image__img');

const popupImageSubtitle = document.querySelector('.popup-image__subtitle')

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];


// ------------EDITAR NOME E OCUPACAO NO PERFIL---------
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameUser.textContent = inputName.value;
  ocupationUser.textContent = inputOcupation.value;
  closeModal(formElement);
}

formElement.addEventListener('submit', handleProfileFormSubmit);

//---------CRIAR CARTOES INPUT USUARIO--------

function createUserCards (evt) {
  evt.preventDefault();

  //pegar o titulo do cartao
  const inputTitleUser = document.querySelector('#edit-name').value;

  //pegar link do cartao
  const inputLinkUser = document.querySelector('#link').value;

  //adcionar na array initialCards
  const newCardObject = {name: inputTitleUser, link: inputLinkUser};


  //Instancia para editar o popup de imagem criada pelo usuario

  const newCardUser = new Card(newCardObject, '#card-template', openPopupImage);
  const newCard = newCardUser.generateCard();

  containerUl.prepend(newCard);

  closeModal(formAddImage);
 }

 formCreateImage.addEventListener('submit', createUserCards);


//-------ABRIR IMAGEM AO CLICAR---------

function openPopupImage(imageSrc, subtitleImage) {
  popupImageImg.src = imageSrc;
  popupImageSubtitle.textContent = subtitleImage
  popupImage.classList.add('popup-image_opened')
}

document.querySelectorAll('.elements__image').forEach((image) => {
  image.addEventListener('click', () => {
     openPopupImage(image.src);
  });
});

//fechar o popup
popupImageCloseButton.addEventListener('click', () => {
  popupImage.classList.remove('popup-image_opened');
})

//-----------------CRIANDO AS INSTANCIAS-------------------

//Instancia para cada cartao inicial

initialCards.forEach((item) => {
  const card = new Card(item, '#card-template', openPopupImage);
  const cardElement = card.generateCard();
  document.querySelector('.elements__cards').append(cardElement);
})

//Instancia para o popup de editar perfil
const profileFormValidator = new FormValidator(config, document.querySelector('.popup__form'));
profileFormValidator.enableValidation();

//Instancia para o popup de editar a imagem
const imagesFormValidator = new FormValidator(config, document.querySelector('.popup-edit__form'));
imagesFormValidator.enableValidation();



//CHAMAR FUNCOES PARA CLICAR NO ESC E QUALQUER LUGAR NA TELA

document.addEventListener('keydown', pressEscCloseModal);
document.addEventListener('click', clickOutCloseModal);



