!function(){"use strict";class e{constructor(e,t){var s,n,o;s=this,o=()=>this._inputElements.every((e=>e.validity.valid)),(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(n="_checkFormValidity"))in s?Object.defineProperty(s,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[n]=o,this._formElement=e,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}_showInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_toggleButtonState(){this._checkFormValidity()?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0)}_setEventListeners(){this._inputElements=[...this._formElement.querySelectorAll(this._inputSelector)],this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputElements.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState(this._inputElements,this._submitButton)}))}))}resetValidation(){this._toggleButtonState(),this._inputElements.forEach((e=>{this._hideInputError(e)}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners(this._formElement)}}class t{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handleImageClick=s}_getTemplate(){return document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(!0)}_handleLikeClick(){this.likeButton.classList.toggle("card__like-button_active")}_handleTrashClick(){this._element.remove()}_setEventListeners(){this.likeButton.addEventListener("click",(()=>this._handleLikeClick(this.likebutton))),this.cardTrashButton.addEventListener("click",(()=>{this._handleTrashClick()})),this.cardImage.addEventListener("click",(()=>{this._handleImageClick()}))}generateCard(){this._element=this._getTemplate(),this.likeButton=this._element.querySelector(".card__like-button"),this.cardTrashButton=this._element.querySelector(".card__trash-button"),this.cardImage=this._element.querySelector(".card__image");const e=this._element.querySelector(".card__title");return this.cardImage.src=this._link,this.cardImage.alt=this._name,e.textContent=this._name,this._setEventListeners(),this._element}}class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._popupElement.addEventListener("mousedown",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup__closebutton"))&&this.close()}))}}var n=class extends s{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".popup__form"),this._handleFormSubmit=t}_getInputValue(){const e=this._popupForm.querySelectorAll(".popup__input"),t={};return e.forEach((e=>{t[e.name]=e.value})),t}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(()=>this._handleFormSubmit(this._getInputValue())))}close(){this._popupForm.reset(),super.close()}};const o=[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],r=document.querySelector("#modal"),i=document.querySelector(".profile__edit-button"),l=r.querySelector("#modal-closebutton"),a=r.querySelector("#modal-form"),c=(document.querySelector(".profile__title"),document.querySelector(".profile__description"),document.querySelector("#popup-name")),u=document.querySelector("#popup-description"),p=document.querySelector("#add-popup"),d=document.querySelector(".profile__add-button");console.log(p),p.querySelector("#add-popupclosebutton");const _=p.querySelector("#add-popupform"),m=(document.querySelector("#popup-image"),document.querySelector("#popup-text"),document.querySelector("#preview-popup")),h=m.querySelector("#popup-closebutton"),E=document.querySelector(".cards__list"),y=(document.querySelector("#card-template").content.firstElementChild,{inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),v=new e(_,y);v.enableValidation(),console.log(_);const S=new e(a,y);S.enableValidation();const b=new class{constructor(e){let{nameSelector:t,jobSelector:s}=e;this._nameEl=document.querySelector(t),this._jobEl=document.querySelector(s)}getUserInfo(){return{name:this._nameEl.textContent,job:this._jobEl.textContent}}setUserInfo(e){let{name:t,job:s}=e;this._nameEl.textContent=t,this._jobEl.textContent=s}}({nameSelector:".profile__title",jobSelector:".profile__description"}),g=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:o,renderer:C},".cards__list");g.renderItems();const f=new n("#modal",(e=>{b.setUserInfo({name:e.name,job:e.description}),f.close()}));f.setEventListeners();const k=new n("#add-popup",(e=>{const t=C(e);g.addItem(t),k.close()}));k.setEventListeners();const L=new class extends s{constructor(e){super({popupSelector:e}),this._image=document.querySelector("#popup-image"),this._text=document.querySelector("#popup-text")}open(e){let{link:t,name:s}=e;this._image.src=t,this._image.alt=s,this._text.textContent=s,super.open()}}("#preview-popup");function C(e){return new t(e,"#card-template",(()=>{L.open(e)})).generateCard()}L.setEventListeners(),o.forEach((e=>{const t=C(e);E.append(t)})),i.addEventListener("click",(function(){const{name:e,job:t}=b.getUserInfo();c.value=e,u.value=t,S.resetValidation(),f.open(r)})),d.addEventListener("click",(()=>{v.resetValidation(),k.open()})),l.addEventListener("click",(function(){f.close(r)})),h.addEventListener("click",(()=>{closeModal(m)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRTixFQUFXSyxjQUNqQ2xCLEVBQWtCUCxNQUFRMUMsRUFDMUJrRCxFQUF3QlIsTUFBUTBCLEVBQ2hDUCxFQUFxQnRFLGtCQUNyQjZGLEVBQWN4RCxLQUFLaUIsRUFDckIsSUFFQU8sRUFBZTlELGlCQUFpQixTQUFTLEtBQ3ZDc0UsRUFBaUJyRSxrQkFDakJnRyxFQUFhM0QsTUFBTSxJQU1yQm1CLEVBQXdCekQsaUJBQWlCLFNBSHpDLFdBQ0U4RixFQUFjdkQsTUFBTWdCLEVBQ3RCLElBZ0JBWSxFQUFpQm5FLGlCQUFpQixTQUFTLEtBQ3pDd0csV0FBV3RDLEVBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoZm9ybUVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0Zvcm1WYWxpZGl0eSA9ICgpID0+XG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcblxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLl9jaGVja0Zvcm1WYWxpZGl0eSgpO1xuICAgIGlmICh2YWxpZCkge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gY29uc3QgaXNWYWxpZCA9IHRoaXMuaW5wdXRFbGVtZW50cy5zb21lKChpbnB1dEVsZW1lbnQpPT4ge1xuICAgIC8vICAgICByZXR1cm4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkXG4gICAgLy8gfSlcbiAgICAvLyBpZiAoaXNWYWxpZCkge1xuICAgIC8vICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAvLyAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIC8vICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvLyAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gW1xuICAgICAgLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSxcbiAgICBdO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRFbGVtZW50cywgdGhpcy5fc3VibWl0QnV0dG9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVJbWFnZUNsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICBfaGFuZGxlTGlrZUNsaWNrKCkge1xuICAgIHRoaXMubGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9XG5cbiAgX2hhbmRsZVRyYXNoQ2xpY2soKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIF9oYW5kbGVQcmV2aWV3Q2xpY2soKSB7XG4gIC8vICAgY29uc3QgaW1hZ2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtaW1hZ2VcIik7XG4gIC8vICAgY29uc3QgaW1hZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC10ZXh0XCIpO1xuICAvLyAgIGNvbnN0IGltYWdlTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctcG9wdXBcIik7XG4gIC8vICAgaW1hZ2VNb2RhbC5zcmMgPSB0aGlzLl9saW5rO1xuICAvLyAgIGltYWdlTW9kYWwuYWx0ID0gdGhpcy5fbmFtZTtcbiAgLy8gICBpbWFnZVRleHQudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAvLyAgIG9wZW5Nb2RhbChpbWFnZU1vZGFsV2luZG93KTtcbiAgLy8gfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5saWtlYnV0dG9uKVxuICAgICk7XG4gICAgdGhpcy5jYXJkVHJhc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZVRyYXNoQ2xpY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLmNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMubGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLmNhcmRUcmFzaEJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190cmFzaC1idXR0b25cIik7XG4gICAgdGhpcy5jYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gICAgY29uc3QgY2FyZFRpdGxlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICAgIHRoaXMuY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5jYXJkSW1hZ2UuYWx0ID0gdGhpcy5fbmFtZTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBcIikgfHxcbiAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2VidXR0b25cIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xuICAgIHN1cGVyKHsgcG9wdXBTZWxlY3RvciB9KTtcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWUoKSlcbiAgICApO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtO1xuIiwiaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgbW91bnRhaW5zXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cbmNvbnN0IHByb2ZpbGVNb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxcIik7XG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlTW9kYWxDbG9zZUJ1dHRvbiA9XG4gIHByb2ZpbGVNb2RhbEJveC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNsb3NlYnV0dG9uXCIpO1xuY29uc3QgcHJvZmlsZUVkaXRGb3JtID0gcHJvZmlsZU1vZGFsQm94LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtZm9ybVwiKTtcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLW5hbWVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtZGVzY3JpcHRpb25cIik7XG5jb25zdCBhZGRNb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXBvcHVwXCIpO1xuY29uc3QgYWRkTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5jb25zb2xlLmxvZyhhZGRNb2RhbEJveCk7XG5jb25zdCBhZGRNb2RhbENsb3NlQnV0dG9uID0gYWRkTW9kYWxCb3gucXVlcnlTZWxlY3RvcihcIiNhZGQtcG9wdXBjbG9zZWJ1dHRvblwiKTtcbmNvbnN0IGFkZE1vZGFsRm9ybSA9IGFkZE1vZGFsQm94LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXBvcHVwZm9ybVwiKTtcbmNvbnN0IGltYWdlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWltYWdlXCIpO1xuY29uc3QgaW1hZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC10ZXh0XCIpO1xuY29uc3QgaW1hZ2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlldy1wb3B1cFwiKTtcbmNvbnN0IGltYWdlQ2xvc2VCdXR0b24gPSBpbWFnZU1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtY2xvc2VidXR0b25cIik7XG5jb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuY29uc3QgY2FyZFRlbXBsYXRlID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRlbXBsYXRlXCIpLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbmNvbnN0IGZvcm1WYWxpZGF0aW9uQ29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoYWRkTW9kYWxGb3JtLCBmb3JtVmFsaWRhdGlvbkNvbmZpZyk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnNvbGUubG9nKGFkZE1vZGFsRm9ybSk7XG5cbmNvbnN0IHByb2ZpbGVGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHByb2ZpbGVFZGl0Rm9ybSxcbiAgZm9ybVZhbGlkYXRpb25Db25maWdcbik7XG5wcm9maWxlRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IHVzZXJJbmZvRWwgPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXG4gIGpvYlNlbGVjdG9yOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxufSk7XG5cbmNvbnN0IHNlY3Rpb25FbCA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogY3JlYXRlQ2FyZCxcbiAgfSxcbiAgXCIuY2FyZHNfX2xpc3RcIlxuKTtcbnNlY3Rpb25FbC5yZW5kZXJJdGVtcygpO1xuXG5jb25zdCBlZGl0Rm9ybU1vZGFsID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjbW9kYWxcIiwgKGlucHV0VmFsdWVzKSA9PiB7XG4gIHVzZXJJbmZvRWwuc2V0VXNlckluZm8oe1xuICAgIG5hbWU6IGlucHV0VmFsdWVzLm5hbWUsXG4gICAgam9iOiBpbnB1dFZhbHVlcy5kZXNjcmlwdGlvbixcbiAgfSk7XG4gIGVkaXRGb3JtTW9kYWwuY2xvc2UoKTtcbn0pO1xuZWRpdEZvcm1Nb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBhZGRGb3JtTW9kYWwgPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNhZGQtcG9wdXBcIiwgKGlucHV0VmFsdWVzKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGlucHV0VmFsdWVzKTtcbiAgc2VjdGlvbkVsLmFkZEl0ZW0oY2FyZCk7XG4gIGFkZEZvcm1Nb2RhbC5jbG9zZSgpO1xufSk7XG5hZGRGb3JtTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIiNwcmV2aWV3LXBvcHVwXCIpO1xuaW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGRhdGEsIFwiI2NhcmQtdGVtcGxhdGVcIiwgKCkgPT4ge1xuICAgIGltYWdlUG9wdXAub3BlbihkYXRhKTtcbiAgfSk7XG4gIHJldHVybiBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xufVxuXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xuICBjYXJkc0xpc3QuYXBwZW5kKGNhcmQpO1xufSk7XG5cbmZ1bmN0aW9uIG9wZW5Qcm9maWxlTW9kYWwoKSB7XG4gIGNvbnN0IHsgbmFtZSwgam9iIH0gPSB1c2VySW5mb0VsLmdldFVzZXJJbmZvKCk7XG4gIHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlID0gbmFtZTtcbiAgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBqb2I7XG4gIHByb2ZpbGVGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBlZGl0Rm9ybU1vZGFsLm9wZW4ocHJvZmlsZU1vZGFsQm94KTtcbn1cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvZmlsZU1vZGFsKTtcbmFkZE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEZvcm1Nb2RhbC5vcGVuKCk7XG59KTtcblxuZnVuY3Rpb24gY2xvc2VQcm9maWxlTW9kYWwoKSB7XG4gIGVkaXRGb3JtTW9kYWwuY2xvc2UocHJvZmlsZU1vZGFsQm94KTtcbn1cbnByb2ZpbGVNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2ZpbGVNb2RhbCk7XG5cbi8vIGZ1bmN0aW9uIG9wZW5BZGRNb2RhbCgpIHtcbi8vICAgYWRkTW9kYWxGb3JtLnJlc2V0KCk7XG4vLyAgIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4vLyAgIG9wZW5Nb2RhbChhZGRNb2RhbEJveCk7XG4vLyAgIGNvbnNvbGUubG9nKGFkZE1vZGFsRm9ybSk7XG4vLyB9XG4vLyBhZGRNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZE1vZGFsKTtcblxuLy8gZnVuY3Rpb24gY2xvc2VBZGRNb2RhbCgpIHtcbi8vICAgY2xvc2VNb2RhbChhZGRNb2RhbEJveCk7XG4vLyB9XG4vLyBhZGRNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUFkZE1vZGFsKTtcblxuaW1hZ2VDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKGltYWdlTW9kYWxXaW5kb3cpO1xufSk7XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGlhbENhcmRzLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGNhcmRzTGlzdC5hcHBlbmQoZ2V0Q2FyZEVsZW1lbnQoaW5pdGlhbENhcmRzW2ldKSk7XG5cbi8vICAgLy8gVGhpcyBpcyB0aGUgc2FtZSBjb2RlIGFzIGFib3ZlXG4vLyAgIC8vIGNvbnN0IGRhdGEgPSBpbml0aWFsQ2FyZHNbaV07XG4vLyAgIC8vIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoZGF0YSk7XG4vLyAgIC8vIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbi8vIH1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIGpvYlNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9uYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fam9iRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlNlbGVjdG9yKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lRWwudGV4dENvbnRlbnQsXG4gICAgICBqb2I6IHRoaXMuX2pvYkVsLnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGpvYiB9KSB7XG4gICAgdGhpcy5fbmFtZUVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9qb2JFbC50ZXh0Q29udGVudCA9IGpvYjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIHNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xuICAgIHRoaXMuX2ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1pbWFnZVwiKTtcbiAgICB0aGlzLl90ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC10ZXh0XCIpO1xuICB9XG5cbiAgb3Blbih7IGxpbmssIG5hbWUgfSkge1xuICAgIHRoaXMuX2ltYWdlLnNyYyA9IGxpbms7XG4gICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcbiAgICB0aGlzLl90ZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb3JtVmFsaWRhdG9yIiwiY29uc3RydWN0b3IiLCJmb3JtRWxlbWVudCIsImNvbmZpZyIsInRoaXMiLCJfaW5wdXRFbGVtZW50cyIsImV2ZXJ5IiwiaW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJyZW1vdmUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2NoZWNrRm9ybVZhbGlkaXR5IiwiX3N1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVzZXRWYWxpZGF0aW9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiQ2FyZCIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX2dldFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjb250ZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbG9uZU5vZGUiLCJfaGFuZGxlTGlrZUNsaWNrIiwibGlrZUJ1dHRvbiIsInRvZ2dsZSIsIl9oYW5kbGVUcmFzaENsaWNrIiwiX2VsZW1lbnQiLCJsaWtlYnV0dG9uIiwiY2FyZFRyYXNoQnV0dG9uIiwiY2FyZEltYWdlIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZFRpdGxlIiwic3JjIiwiYWx0IiwiUG9wdXAiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwib3BlbiIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsInNldEV2ZW50TGlzdGVuZXJzIiwidGFyZ2V0IiwiY29udGFpbnMiLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfZ2V0SW5wdXRWYWx1ZSIsImlucHV0cyIsImlucHV0VmFsdWVzIiwidmFsdWUiLCJyZXNldCIsImluaXRpYWxDYXJkcyIsInByb2ZpbGVNb2RhbEJveCIsInByb2ZpbGVFZGl0QnV0dG9uIiwicHJvZmlsZU1vZGFsQ2xvc2VCdXR0b24iLCJwcm9maWxlRWRpdEZvcm0iLCJwcm9maWxlVGl0bGVJbnB1dCIsInByb2ZpbGVEZXNjcmlwdGlvbklucHV0IiwiYWRkTW9kYWxCb3giLCJhZGRNb2RhbEJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRNb2RhbEZvcm0iLCJpbWFnZU1vZGFsV2luZG93IiwiaW1hZ2VDbG9zZUJ1dHRvbiIsImNhcmRzTGlzdCIsImZvcm1WYWxpZGF0aW9uQ29uZmlnIiwiYWRkRm9ybVZhbGlkYXRvciIsInByb2ZpbGVGb3JtVmFsaWRhdG9yIiwidXNlckluZm9FbCIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVFbCIsIl9qb2JFbCIsImdldFVzZXJJbmZvIiwiam9iIiwic2V0VXNlckluZm8iLCJfcmVmMiIsInNlY3Rpb25FbCIsInNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJhZGRJdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJjcmVhdGVDYXJkIiwiZWRpdEZvcm1Nb2RhbCIsIlBvcHVwV2l0aEZvcm0iLCJkZXNjcmlwdGlvbiIsImFkZEZvcm1Nb2RhbCIsImNhcmQiLCJpbWFnZVBvcHVwIiwiX2ltYWdlIiwiX3RleHQiLCJjYXJkRGF0YSIsImFwcGVuZCIsImNsb3NlTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9