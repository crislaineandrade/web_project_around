export default class Card {
  constructor(data, cardSeletor, handleCardClick) {
    this._text = data.name;
    this._image = data.link;
    this._cardSelector = cardSeletor;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".elements__image").src = this._image;
    this._element.querySelector(".elements__image").alt = this._text;
    this._element.querySelector(".elements__name-card").textContent =
      this._text;

    // this._openPopupImage(this._image, this._text);

    this._likeButton();

    this._deleteCard();

    return this._element;
  }

  _likeButton() {
    this._element
      .querySelector(".elements__button-image-like")
      .addEventListener("click", (evt) => {
        if (evt.target.getAttribute("src") === "./images/button_heart.png") {
          return evt.target.setAttribute(
            "src",
            "./images/heartButtonBlack.png"
          );
        }

        return evt.target.setAttribute("src", "./images/button_heart.png");
      });
  }

  setEventListeners() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () =>
        this.handleCardClick(this._text, this._image))
  }

  _deleteCard() {
    this._element.querySelector('.elements__delete-button').addEventListener
  ('click', (evt) => {
    evt.target.parentNode.remove();
  })
  }
}
