export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  _handleLikeClick() {
    this.likeButton.classList.toggle("card__like-button_active");
  }

  _handleTrashClick() {
    this._element.remove();
  }

  _setEventListeners() {
    this.likeButton.addEventListener("click", () =>
      this._handleLikeClick(this.likebutton)
    );
    this.cardTrashButton.addEventListener("click", () => {
      this._handleTrashClick();
    });
    this.cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this.likeButton = this._element.querySelector(".card__like-button");
    this.cardTrashButton = this._element.querySelector(".card__trash-button");
    this.cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }
}
