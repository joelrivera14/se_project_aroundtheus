import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import "./index.css";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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

const userInfoEl = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const sectionEl = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  ".cards__list"
);
sectionEl.renderItems();

const editFormModal = new PopupWithForm("#modal", (inputValues) => {
  userInfoEl.setUserInfo({
    name: inputValues.name,
    job: inputValues.description,
  });
  editFormModal.close();
});
editFormModal.setEventListeners();

const addFormModal = new PopupWithForm("#add-popup", (inputValues) => {
  const card = createCard(inputValues);
  sectionEl.addItem(card);
  addFormModal.close();
});
addFormModal.setEventListeners();

const imagePopup = new PopupWithImage("#preview-popup");
imagePopup.setEventListeners();

function createCard(data) {
  const card = new Card(data, "#card-template", () => {
    imagePopup.open(data);
  });
  return card.generateCard();
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardsList.append(card);
});

function openProfileModal() {
  const { name, job } = userInfoEl.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = job;
  profileFormValidator.resetValidation();
  editFormModal.open(profileModalBox);
}
profileEditButton.addEventListener("click", openProfileModal);
addModalButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addFormModal.open();
});

function closeProfileModal() {
  editFormModal.close(profileModalBox);
}
profileModalCloseButton.addEventListener("click", closeProfileModal);

// function openAddModal() {
//   addModalForm.reset();
//   addFormValidator.resetValidation();
//   openModal(addModalBox);
//   console.log(addModalForm);
// }
// addModalButton.addEventListener("click", openAddModal);

// function closeAddModal() {
//   closeModal(addModalBox);
// }
// addModalCloseButton.addEventListener("click", closeAddModal);

imageCloseButton.addEventListener("click", () => {
  closeModal(imageModalWindow);
});

// for (let i = 0; i < initialCards.length; i++) {
//   cardsList.append(getCardElement(initialCards[i]));

//   // This is the same code as above
//   // const data = initialCards[i];
//   // const cardElement = getCardElement(data);
//   // cardsList.prepend(cardElement);
// }
