import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import "./index.css";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupConfirmation.js";

const profileModalBox = document.querySelector("#modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton =
  profileModalBox.querySelector("#modal-closebutton");
const profileEditForm = profileModalBox.querySelector("#modal-form");
const profileTitleInput = document.querySelector("#popup-name");
const profileDescriptionInput = document.querySelector("#popup-description");
const addModalBox = document.querySelector("#add-popup");
const addModalButton = document.querySelector(".profile__add-button");
console.log(addModalBox);
const addModalForm = addModalBox.querySelector("#add-popupform");
const imageModalWindow = document.querySelector("#preview-popup");
const imageCloseButton = imageModalWindow.querySelector("#popup-closebutton");
const cardsList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const imageModal = document.querySelector("#popup-image");
const imageText = document.querySelector("#popup-text");
const addModalCloseButton = addModalBox.querySelector("#add-popupclosebutton");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

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
  avatarSelector: ".profile__image",
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
    userInfoEl.setUserInfo({ name: userData.name, job: userData.about });
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
    handleDeleteCard: (cardId) => {
      deletePopup.open();
      deletePopup.setSubmitAction(() => {
        api.deleteCard(cardId).then(() => {
          card.deleteClick();
          deletePopup.close();
        });
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

const aviForm = document.querySelector("#avi-popupform");
const aviFormValidator = new FormValidator(aviForm, formValidationConfig);
aviFormValidator.enableValidation();

const deletePopup = new PopupWithConfirmation("#delete-popup");
deletePopup.setEventListeners();

const editFormModal = new PopupWithForm("#modal", (inputValues) => {
  editFormModal.renderLoading(true);
  api.editProfile(inputValues).then(() => {
    editFormModal.renderLoading(false);
    userInfoEl.setUserInfo({
      name: inputValues.name,
      job: inputValues.description,
    });
    editFormModal.close();
  });
});
editFormModal.setEventListeners();

const addFormModal = new PopupWithForm("#add-popup", (inputValues) => {
  addFormModal.renderLoading(true);
  api
    .addNewCard(inputValues)
    .then((data) => {
      const card = createCard(data);
      sectionEl.addItem(card);
      addFormModal.close();
    })
    .finally(() => {
      addFormModal.renderLoading(false);
    });
});
addFormModal.setEventListeners();

const updateProfileForm = new PopupWithForm("#avi-popup", (inputValues) => {
  updateProfileForm.renderLoading(true);
  api.updateProfilePicture(inputValues).then((value) => {
    userInfoEl.setAvatarInfo(value.avatar);
    updateProfileForm.close();
  });
});
updateProfileForm.setEventListeners();

const profileEdit = document.querySelector(".profile__image");
profileEdit.addEventListener("click", () => {
  updateProfileForm.open();
});

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
