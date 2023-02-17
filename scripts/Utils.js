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
