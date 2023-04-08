export default class Card {
  constructor(data, cardSelector, handleImageClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._numLikes = this._likes.length;

    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  // _handleLikeClick() {
  //   this.likeButton.classList.toggle("card__like-button_active");
  // }

  _handleTrashClick() {
    this._element.remove();
  }

  updateLikes() {
    this._numLikes = this._likes.length;
    this._cardLikes.textContent = this._numLikes;
  }

  _setEventListeners() {
    this.likeButton.addEventListener("click", () => this._handleLikeClick());
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
    this._cardLikes = this._element.querySelector(".card__likes-counter");
    this._cardLikes.textContent = this._numLikes;
    this._setEventListeners();
    return this._element;
  }
}
