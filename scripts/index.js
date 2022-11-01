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

const cardsList = document.querySelector(".cards__list");
const profileModalBox = document.querySelector(".modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = document.querySelector(".modal__closebutton");
const profileEditForm = document.querySelector(".modal__form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#name");
const profileDescriptionInput = document.querySelector("#description");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function profileOpenModal() {
  profileModalBox.classList.add("modal_opened");
}
profileEditButton.addEventListener("click", profileOpenModal);

function profileCloseModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileModalBox.classList.remove("modal_opened");
}

profileModalCloseButton.addEventListener("click", profileCloseModal);

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = event.target.name.value;
  const descriptionValue = event.target.description.value;

  profileTitle.textContent = titleValue;
  profileDescription.textContent = descriptionValue;
  profileCloseModal();
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

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
