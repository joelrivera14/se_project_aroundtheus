export default class Card {
  constructor({
    data,
    cardSelector,
    handlePreviewImage,
    handleLikeCard,
    currentUserId,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._cardSelector = cardSelector;
    this._handleImageClick = handlePreviewImage;
    this._handleLikeCard = handleLikeCard;
    this._currentUserId = currentUserId;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  deleteClick() {
    this._element.remove();
  }

  updateLikes(likes) {
    this._likes = likes;
    this.renderLikes();
  }

  renderLikes() {
    this._cardLikes.textContent = this._likes.length;
    const isLiked = this.isLiked();
    if (isLiked) {
      this.likeButton.classList.add("card__like-button_active");
    } else {
      this.likeButton.classList.remove("card__like-button_active");
    }
  }

  isLiked() {
    return this._likes.some((like) => like._id === this._currentUserId);
  }

  _checkIdForDelete(userId) {
    if (userId.owner._id === this._currentUserID) {
      this.add();
    } else {
      this.remove();
    }
  }

  _setEventListeners() {
    this.likeButton.addEventListener("click", () => this._handleLikeCard());
    this.cardTrashButton.addEventListener("click", () => {
      this.deleteClick();
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
    this.renderLikes();
    this._setEventListeners();
    return this._element;
  }
}
