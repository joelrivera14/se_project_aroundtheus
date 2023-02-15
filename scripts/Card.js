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
    imageModal.alt = data.name;
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
    this.cardImage.addEventListener("click", () => {});
  }

  generateCard() {
    this._element = this._getTemplate();
    this.likeButton = this._element.querySelector(".card__like-button");
    this.cardTrashButton = this._element.querySelector(".card__trash-button");
    this.cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");
    this.cardImage.src = this._link;
    cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }
}
