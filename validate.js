//formulario
const form = document.forms.formProfile;
//input do formulario
const formInput = form.elements.name;
// const errorMessage = form.querySelector(`.${formInput.id}-error`);
const ocupationInput = form.elements.ocupation;
// const ocupationErrorMessage = form.querySelector(`.${ocupationInput.id}-error`)




// Mostrar mensagem de erro
function showInputError(formElement, inputElement) {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  errorMessage.textContent = inputElement.validationMessage; // Usando o validationMessage do input
  errorMessage.classList.add('popup__form_name-input-error_active');
  inputElement.classList.add('popup__name_no-margin')
}

// Esconder mensagem de erro
function hideInputError(formElement, inputElement) {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove('popup__form_name-input-error_active');
  inputElement.classList.remove('popup__name_no-margin')
}

// Validar o input
function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement); // Exibe erro caso o input não seja válido
  } else {
    hideInputError(formElement, inputElement); // Esconde o erro caso o input seja válido
  }
}

// Verifica se algum input está inválido
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Controla o estado do botão de envio
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit_inactive');
    buttonElement.disabled = true; // Desabilita o botão
  } else {
    buttonElement.classList.remove('form__submit_inactive');
    buttonElement.disabled = false; // Habilita o botão
  }
}

// Adiciona os event listeners para todos os campos do formulário
function setEventListener(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('input')); // Seleciona todos os inputs
  const buttonElement = formElement.querySelector('.form__submit'); // Seleciona o botão de submit

  // Ajusta o estado do botão inicialmente
  toggleButtonState(inputList, buttonElement);

  // Adiciona o evento de input nos campos
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement); // Valida o input sempre que o usuário digitar
      toggleButtonState(inputList, buttonElement); // Atualiza o estado do botão
    });
  });
}

// Habilita a validação em todos os formulários
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('form')); // Seleciona todos os formulários

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault(); // Impede o envio do formulário
    });
    setEventListener(formElement); // Adiciona o event listener em cada formulário
  });
}

enableValidation(); // Chama a função para ativar a validação





