import { openModal } from "./Utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
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

  _handlePreviewClick() {
    const imageModal = document.querySelector("#popup-image");
    const imageText = document.querySelector("#popup-text");
    const imageModalWindow = document.querySelector("#preview-popup");
    imageModal.src = this._link;
    imageModal.alt = this._name;
    imageText.textContent = this._name;
    openModal(imageModalWindow);
  }

  _setEventListeners() {
    this.likeButton.addEventListener("click", () =>
      this._handleLikeClick(this.likebutton)
    );
    this.cardTrashButton.addEventListener("click", () => {
      this._handleTrashClick();
    });
    this.cardImage.addEventListener("click", () => {
      this._handlePreviewClick();
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
