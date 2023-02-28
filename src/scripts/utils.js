export function handleOverlayClose(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

export function handleEscUp(evt) {
  evt.preventDefault();
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closeModal(openPopup);
  }
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
