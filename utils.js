const openButton = document.querySelector('.profile__image-edit-button');
const addImageButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeEditButton = document.querySelector('.popup-edit__close-button');
export const formElement = document.querySelector('.popup');
export const formAddImage = document.querySelector('.popup-edit');
export const popupImage = document.querySelector('.popup-image');

// ------------ABRIR FORMULARIO---------

function openModal(formReceived) {
  formReceived.classList.add("popup_opened");
}
openButton.addEventListener("click", function () {
  openModal(formElement);
});
addImageButton.addEventListener("click", function () {
  openModal(formAddImage);
});

// ------------FECHAR FORMULARIO---------
function closeModal(formReceived) {
  formReceived.classList.remove("popup_opened");
}

closeButton.addEventListener("click", function () {
  closeModal(formElement);
});
closeEditButton.addEventListener("click", function () {
  closeModal(formAddImage);
});

//-------CLICAR EM QUALQUER LUGAR PARA FECHAR---------

function pressEscCloseModal(evt) {
  if (evt.key === "Escape") {
    if (formElement.classList.contains("popup_opened")) {
      formElement.classList.remove("popup_opened");
    } else if (formAddImage.classList.contains("popup_opened")) {
      formAddImage.classList.remove("popup_opened");
    } else if (popupImage.classList.contains("popup-image_opened")) {
      popupImage.classList.remove("popup-image_opened");
    }
  }
}

function clickOutCloseModal(evt) {
  const targetEvt = evt.target;

  if (targetEvt.classList.contains("popup_opened")) {
    formElement.classList.remove("popup_opened");
  }

  if (targetEvt.classList.contains("popup_opened")) {
    formAddImage.classList.remove("popup_opened");
  }

  if (targetEvt.classList.contains("popup-image_opened")) {
    popupImage.classList.remove("popup-image_opened");
  }
}


export { openModal, closeModal, pressEscCloseModal, clickOutCloseModal };
