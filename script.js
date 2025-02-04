import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js'
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
const openButton = document.querySelector('.profile__image-edit-button');
const addImageButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeEditButton = document.querySelector('.popup-edit__close-button');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const formElement = document.querySelector('.popup');
const formAddImage = document.querySelector('.popup-edit');
const popupImage = document.querySelector('.popup-image');
const nameUser = document.querySelector('.profile__user')
const ocupationUser = document.querySelector('.profile__paragraph');


const config = {
  input: 'input',
  submitButton: '.form__submit',
  inactiveButtonClass: '.form__submit_inactive',
  errorClass:'popup__form_name-input-error_active'
}

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

// ------------INSTANCIAS ABRIR FORMULARIO---------


const openPopupProfile = new Popup(formElement);
openButton.addEventListener('click', () => {
  openPopupProfile.open()
})

const openPopupAddImage = new Popup(formAddImage);
addImageButton.addEventListener('click', () => {
  openPopupAddImage.open()
})

// ------------FECHAR FORMULARIO---------

const closePopupProfile = new Popup(formElement)
closeButton.addEventListener('click', () => {
  closePopupProfile.close()
})

const closePopupAddImage = new Popup(formAddImage)
closeEditButton.addEventListener('click', () => {
  closePopupAddImage.close()
})

const closePopupImage = new Popup(popupImage);
popupImageCloseButton.addEventListener('click', () => {
  closePopupImage.close()
})


//-------CLICAR NO ESC PARA FECHAR---------

const pressEscCloseModalProfile = new Popup(formElement);
document.addEventListener('keydown', (evt) => {
  pressEscCloseModalProfile.keydownCloseEsc(evt)
})

const pressEscCloseModalAddImage = new Popup(formAddImage);
document.addEventListener('keydown', (evt) => {
  pressEscCloseModalAddImage.keydownCloseEsc(evt)
})

const pressEscCloseModalImage = new Popup(popupImage);
document.addEventListener('keydown', (evt) => {
  pressEscCloseModalImage.keydownCloseEsc(evt)
})


//-------CLICAR EM QUALQUER LUGAR DA TELA PARA FECHAR---------


const clickOutCloseProfile = new Popup(formElement);
clickOutCloseProfile.setEventListeners();

const clickOutCloseAddImage = new Popup(formAddImage);
clickOutCloseAddImage.setEventListeners();

const clickOutCloseImage = new Popup(popupImage);
clickOutCloseImage.setEventListeners();

//-------ABRIR IMAGEM AO CLICAR---------


const clickOpenPopupImage = new PopupWithImage(popupImage);
document.querySelectorAll('.elements__image').forEach((image) => {
  image.addEventListener('click', () => {
    clickOpenPopupImage.open({
      imageSrc: image.src,
      subtitleImage: image.textContent})
  })
})


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

//Instancia para o popup de editar perfil
const profileFormValidator = new FormValidator(config, document.querySelector('.popup__form'));
profileFormValidator.enableValidation();

//Instancia para o popup de editar a imagem
const imagesFormValidator = new FormValidator(config, document.querySelector('.popup-edit__form'));
imagesFormValidator.enableValidation();













