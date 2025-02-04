import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js'
import {formElement, formAddImage, popupImage } from './utils.js';
import PopupWithImage from './scripts/PopupWithImage.js'
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';


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



//---------CRIAR CARTOES INPUT USUARIO--------

const section = new Section({
  items: initialCards,
  renderer: (data) => { //o que é esse data?
    section.addItem(createCard(data))
    }
  }, '.elements__cards'

)
section.renderer();


// ------------EDITAR NOME E OCUPACAO NO PERFIL---------

const popupWithFormEditProfile = new PopupWithForm(formElement, (formData) => {


  console.log(ocupationUser)
  const userInfo = new UserInfo({name: nameUser, ocupation: ocupationUser})
  userInfo.setUserInfo(formData.name, formData.ocupation)

})
popupWithFormEditProfile.setEventListeners()





  //fazer a outra instancia do popup de link

const popupWithAddImage = new PopupWithForm(formAddImage, (formData) => {
  const newCardImage = {name: formData.name,
    link: formData.link
  }
  const newCard = createCard(newCardImage)
  section.addNewItem(newCard)

})

popupWithAddImage.setEventListeners()


const openImage = new PopupWithImage(popupImage)

 function createCard(data) {
  const newCardUser = new Card(data, '#card-template', () => openImage.open({imageSrc: data.link, subtitleImage: data.name}));

  const newCard = newCardUser.generateCard();

  newCardUser.setEventListeners()

  return newCard



 }



//-----------------CRIANDO AS INSTANCIAS-------------------

//Instancia para o popup de editar perfil
const profileFormValidator = new FormValidator(config, document.querySelector('.popup__form'));
profileFormValidator.enableValidation();

//Instancia para o popup de editar a imagem
const imagesFormValidator = new FormValidator(config, document.querySelector('.popup-edit__form'));
imagesFormValidator.enableValidation();













