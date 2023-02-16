export function openProfileModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileModalBox);
}

export function closeProfileModal() {
  closeModal(profileModalBox);
}

export function openAddModal() {
  openModal(addModalBox);
  console.log(addModalForm);
}

export function closeAddModal() {
  closeModal(addModalBox);
}

export function handleOverlayClose(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

export function isEscEvent(evt, close) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    close(openPopup);
  }
}

export function handleEscUp(evt) {
  evt.preventDefault();
  isEscEvent(evt, closeModal);
}

export function openModal(modal) {
  modal.classList.add("popup_opened");
  modal.addEventListener("mousedown", handleOverlayClose);
  document.addEventListener("keyup", handleEscUp);
}

export function closeModal(modal) {
  modal.classList.remove("popup_opened");
  modal.removeEventListener("mousedown", handleOverlayClose);
  document.removeEventListener("keyup", handleEscUp);
}

export function like(likeButton) {
  likeButton.classList.toggle("card__like-button_active");
}

export function getCardElement(data) {
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

export function createCard(data) {
  const card = new Card(data, "#card-template");
  return card.generateCard();
}
