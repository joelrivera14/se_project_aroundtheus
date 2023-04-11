import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import "./index.css";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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

const userInfoEl = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__imagecontainer",
});

/*---------- API ----------*/
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "192a5b57-9b62-4192-96d6-217d99b33573",
    "Content-Type": "application/json",
  },
});
let sectionEl;
let currentUserId;
api
  .getAppInfo()
  .then(([userData, cardData]) => {
    currentUserId = userData._id;
    userInfoEl.setUserInfo(userData.name, userData.job);
    userInfoEl.setAvatarInfo(userData.avatar);

    sectionEl = new Section(
      {
        items: cardData,

        renderer: (data) => {
          const card = createCard(data);
          sectionEl.addItem(card);
        },
      },
      ".cards__list"
    );
    sectionEl.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

/*----------renderCard Function with API handlers----------*/
// function createCard(data) {
//   const card = new Card(
//     data,
//     "#card-template",
//     () => {
//       imagePopup.open(data);
//     },
//     () => {
//       addLike(data);
//     }
//   );
//   return card.generateCard();
//   updatelikes();
// }
function createCard(data) {
  const card = new Card({
    data,
    cardSelector: "#card-template",
    currentUserId,
    handlePreviewImage: () => {
      imagePopup.open(data);
    },
    handleLikeCard: (shouldRemoveLike) => {
      if (shouldRemoveLike) {
        api.removeLike(data).then((data) => {
          card.updateLikes(data.likes);
        });
      } else {
        api.addLike(data).then((data) => {
          card.updateLikes(data.likes);
        });
      }
    },
    handleDeleteCard: () => {
      api.deleteCard(data).then((data) => {
        card.deleteClick(data.likes);
      });
    },
  });
  return card.generateCard();
}

const addFormValidator = new FormValidator(addModalForm, formValidationConfig);
addFormValidator.enableValidation();
console.log(addModalForm);

const profileFormValidator = new FormValidator(
  profileEditForm,
  formValidationConfig
);
profileFormValidator.enableValidation();

const editFormModal = new PopupWithForm("#modal", (inputValues) => {
  userInfoEl.setUserInfo({
    name: inputValues.name,
    job: inputValues.description,
  });
  editFormModal.close();
});
editFormModal.setEventListeners();

const addFormModal = new PopupWithForm("#add-popup", (inputValues) => {
  api.addNewCard(inputValues).then((inputValues) => {
    const card = createCard(inputValues);
    sectionEl.addItem(card);
    addFormModal.close();
  });
});
addFormModal.setEventListeners();

const imagePopup = new PopupWithImage("#preview-popup");
imagePopup.setEventListeners();

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

imageCloseButton.addEventListener("click", () => {
  closeModal(imageModalWindow);
});
