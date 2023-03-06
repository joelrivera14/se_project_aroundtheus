import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";
import "../pages/index.css";
import Popup from "./popup.js";
import PopupWithForm from "./popupWithForm.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const profileModalBox = document.querySelector("#modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton =
  profileModalBox.querySelector("#modal-closebutton");
const profileEditForm = profileModalBox.querySelector("#modal-form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#popup-name");
const profileDescriptionInput = document.querySelector("#popup-description");
const addModalBox = document.querySelector("#add-popup");
const addModalButton = document.querySelector(".profile__add-button");
console.log(addModalBox);
const addModalCloseButton = addModalBox.querySelector("#add-popupclosebutton");
const addModalForm = addModalBox.querySelector("#add-popupform");
const imageModal = document.querySelector("#popup-image");
const imageText = document.querySelector("#popup-text");
const imageModalWindow = document.querySelector("#preview-popup");
const imageCloseButton = imageModalWindow.querySelector("#popup-closebutton");
const cardsList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const formValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const addFormValidator = new FormValidator(addModalForm, formValidationConfig);
addFormValidator.enableValidation();
console.log(addModalForm);
const profileFormValidator = new FormValidator(
  profileEditForm,
  formValidationConfig
);
profileFormValidator.enableValidation();
function openProfileModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileFormValidator.resetValidation();
  //   profileModalBox.classList.add("popup_opened");
  openModal(profileModalBox);
}
profileEditButton.addEventListener("click", openProfileModal);

function closeProfileModal() {
  //   profileModalBox.classList.remove("popup_opened");
  closeModal(profileModalBox);
}
profileModalCloseButton.addEventListener("click", closeProfileModal);

function openAddModal() {
  addModalForm.reset();
  addFormValidator.resetValidation();
  //   addModalBox.classList.add("popup_opened");
  openModal(addModalBox);
  console.log(addModalForm);
}
addModalButton.addEventListener("click", openAddModal);

function closeAddModal() {
  //   addModalBox.classList.remove("popup_opened");
  closeModal(addModalBox);
}
addModalCloseButton.addEventListener("click", closeAddModal);

function like(likeButton) {
  likeButton.classList.toggle("card__like-button_active");
}

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = profileEditForm.querySelector("#popup-name");
  const descriptionInput = profileEditForm.querySelector("#popup-description");
  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;

  profileTitle.textContent = titleValue;
  profileDescription.textContent = descriptionValue;
  closeProfileModal();
});

addModalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const card = getCardElement({
    link: event.target.link.value,
    name: event.target.title.value,
  });
  cardsList.prepend(card);
  closeAddModal();
  addModalForm.reset();
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => like(likeButton));

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  const cardTrashButton = cardElement.querySelector(".card__trash-button");
  cardTrashButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImage.addEventListener("click", () => {
    imageModal.src = data.link;
    imageModal.alt = data.name;
    imageText.textContent = data.name;
    openModal(imageModalWindow);
  });

  return cardElement;
}
imageCloseButton.addEventListener("click", () => {
  closeModal(imageModalWindow);
});

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardsList.append(card);
});

function createCard(data) {
  const card = new Card(data, "#card-template");
  return card.generateCard();
}

// for (let i = 0; i < initialCards.length; i++) {
//   cardsList.append(getCardElement(initialCards[i]));

//   // This is the same code as above
//   // const data = initialCards[i];
//   // const cardElement = getCardElement(data);
//   // cardsList.prepend(cardElement);
// }
