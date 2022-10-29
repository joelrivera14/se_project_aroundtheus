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
const openModal = document.querySelector(".profile__edit-button");
const closeModal = document.querySelector(".modal__closebutton");
function openClick() {
  console.log("you opened the element");
  modalBox.classList.add(".modal_opened");
}
openModal.addEventListener("click", openClick);

function closeClick() {
  console.log("you closed the element");
  modalBox.classList.remove(".modal_opened");
}
closeModal.addEventListener("click", closeClick);
