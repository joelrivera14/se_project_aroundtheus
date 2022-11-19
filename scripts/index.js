const initialCards = [
  {
    name: "Yosemite Valley",
    link: "../images/yosemite.png",
  },
  {
    name: "Lake Louise",
    link: "../images/lakelouise.png",
  },
  {
    name: "Bald mountains",
    link: "../images/baldmountains.png",
  },
  {
    name: "Latemar",
    link: "../images/latemare.png",
  },
  {
    name: "Vanoise National Park",
    link: "../images/vanoise.png",
  },
  {
    name: "Lago di Braies",
    link: "../images/lagodibraise.png",
  },
];

const profileModalBox = document.querySelector(".modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = document.querySelector(".modal__closebutton");
const profileEditForm = document.querySelector(".modal__form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#name");
const profileDescriptionInput = document.querySelector("#description");
const addModalBox = document.querySelector(".popup");
const addModalButton = document.querySelector(".profile__add-button");
const addModalCloseButton = document.querySelector(".popup__closebutton");
const addModalForm = document.querySelector(".popup__form");
const imageModal = document.querySelector("#popup-image");
const imageText = document.querySelector("#popup-text");
const imageModalWindow = document.querySelector("#preview-popup");
const imageCloseButton = document.querySelector("#popup-closebutton");

const cardsList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function profileOpenModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileModalBox.classList.add("modal_opened");
}
profileEditButton.addEventListener("click", profileOpenModal);

function profileCloseModal() {
  profileModalBox.classList.remove("modal_opened");
}
profileModalCloseButton.addEventListener("click", profileCloseModal);

function addOpenModal() {
  addModalBox.classList.add("popup_opened");
}
addModalButton.addEventListener("click", addOpenModal);

function addCloseModal() {
  addModalBox.classList.remove("popup_opened");
}
addModalCloseButton.addEventListener("click", addCloseModal);

function like(likeButton) {
  likeButton.classList.toggle("card__like-button_active");
}

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = event.target.name.value;
  const descriptionValue = event.target.description.value;

  profileTitle.textContent = titleValue;
  profileDescription.textContent = descriptionValue;
  profileCloseModal();
});

addModalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const card = getCardElement({
    link: event.target.link.value,
    name: event.target.title.value,
  });
  cardsList.prepend(card);
  addModalBox.classList.remove("popup_opened");
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
    imageModalWindow.classList.add("popup_opened");
  });
  imageCloseButton.addEventListener("click", () => {
    imageModalWindow.classList.remove("popup_opened");
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
