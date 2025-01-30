export default class Popup {
  constructor(selectPopup) {
    // this.popup = document.querySelector(selectPopup);
    this.popup = selectPopup
    //esse paramentro é o elemento geral do popup
  }

  open() {
    this.popup.classList.add('popup_opened')

  }

  close() {
    this.popup.classList.remove('popup_opened')
  }



  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      if (this.popup.classList.contains('popup_opened')) {
        this.close();
      }

    }
  }
  keydownCloseEsc(evt) {
    this._handleEscClose(evt);

  }

  setEventListeners() {

    this.popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        evt.target.classList.remove('popup_opened')

      }
    })

  }
}



