const openButton = document.querySelector('.profile__image-edit-button');
const addImageButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeEditButton = document.querySelector('.popup-edit__close-button');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
export const formElement = document.querySelector('.popup');
export const formAddImage = document.querySelector('.popup-edit');
export const popupImage = document.querySelector('.popup-image');
export const imagePopup = document.querySelector('.elements__image')
import Popup from "./scripts/Popup.js";
import PopupWithImage from "./scripts/PopupWithImage.js";

// export const popupImageSrc = document.querySelector('.popup-image__img');

// export const popupImageSubtitle = document.querySelector('.popup-image__subtitle')


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



export {openPopupProfile, openPopupAddImage, closePopupProfile,closePopupAddImage, pressEscCloseModalProfile };
