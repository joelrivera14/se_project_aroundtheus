function handleEscUp(evt) {
  evt.preventDefault();
  isEscEvent(evt, closeModal);
}

function openModal(modal) {
  modal.classList.add("popup_opened");
  modal.addEventListener("mousedown", handleOverlayClose);
  document.addEventListener("keyup", handleEscUp);
}
function closeModal(modal) {
  modal.classList.remove("popup_opened");
  modal.removeEventListener("mousedown", handleOverlayClose);
  document.removeEventListener("keyup", handleEscUp);
}

export default class Card {
  constructor(data, cardSelector) {
    this._name = data._name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  _handleLikeClick() {}

  _handleTrashClick() {
    this._element.remove();
  }

  _handlePreviewClick() {}

  _setEventListeners() {
    this.likeButton.addEventListener("click", () => like(likeButton));
    this.cardTrashButton.addEventListener("click", () => {
      this._handleTrashClick();
    });
    cardImage.addEventListener("click", () => {
      imageModal.src = data.link;
      imageModal.alt = data.name;
      imageText.textContent = data.name;
      openModal(imageModalWindow);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    // this._setEventListeners();
    this.likeButton = this._element.querySelector(".card__like-button");
    this.cardTrashButton = this._element.querySelector(".card__trash-button");
    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");
    cardImage.src = this._link;
    cardTitle.textContent = this._name;

    return this._element;
  }
}
