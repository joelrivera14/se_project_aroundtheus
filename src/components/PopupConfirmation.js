import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._confirmButton = document.querySelector("#delete__button");
    this._saveButton = document.querySelector(".modal__button");
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      this._handleTrashClick();
    });
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}
