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

const modalBox = document.querySelector(".modal");
const closeModal = document.querySelector(".profile__edit-button");
const openModal = document.querySelector(".modal__closebutton");
const profileEditForm = document.querySelector(".modal__form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#name");
const profileDescriptionInput = document.querySelector("#description");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function closeClick() {
  modalBox.classList.remove("modal_opened");
}
closeModal.addEventListener("click", closeClick);

function openClick() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  modalBox.classList.add("modal_opened");
}
openModal.addEventListener("click", openClick);

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileTitle.textContent = titleValue;
  profileDescription.textContent = descriptionValue;
  modalBox.classList.remove("modal_opened");
});
