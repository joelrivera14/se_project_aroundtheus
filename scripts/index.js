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
const profileTitleInput = document.querySelector("#name");
const profileDescriptionInput = document.querySelector("#description");
const addModalBox = document.querySelector("#add-popup");
const addModalButton = document.querySelector(".profile__add-button");
const addModalCloseButton = addModalBox.querySelector("#add-popupclosebutton");
const addModalForm = addModalBox.querySelector("#add-popupform");
const imageModal = document.querySelector("#popup-image");
const imageText = document.querySelector("#popup-text");
const imageModalWindow = document.querySelector("#preview-popup");
const imageCloseButton = imageModalWindow.querySelector("#popup-closebutton");

const cardsList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function openProfileModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
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
  //   addModalBox.classList.add("popup_opened");
  openModal(addModalBox);
}
addModalButton.addEventListener("click", openAddModal);

function closeAddModal() {
  //   addModalBox.classList.remove("popup_opened");
  closeModal(addModalBox);
}
addModalCloseButton.addEventListener("click", closeAddModal);

function openModal(modal) {
  modal.classList.add("popup_opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_opened");
}

function like(likeButton) {
  likeButton.classList.toggle("card__like-button_active");
}

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = event.target.name.value;
  const descriptionValue = event.target.description.value;

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
  closeModal(addModalBox);
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
  imageCloseButton.addEventListener("click", () => {
    closeModal(imageModalWindow);
  });
  return cardElement;
}

initialCards.forEach((cardData) => {
  const card = getCardElement(cardData);
  cardsList.append(card);
});

// for (let i = 0; i < initialCards.length; i++) {
//   cardsList.append(getCardElement(initialCards[i]));

//   // This is the same code as above
//   // const data = initialCards[i];
//   // const cardElement = getCardElement(data);
//   // cardsList.prepend(cardElement);
// }
