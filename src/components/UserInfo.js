export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameEl = document.querySelector(nameSelector);
    this._jobEl = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameEl.textContent,
      job: this._jobEl.textContent,
      avatar: this._avatarELement.textContent,
    };
  }

  setAvatarInfo(data) {
    this._avatarElement.src = data;
  }

  setUserInfo({ name, job }) {
    this._nameEl.textContent = name;
    this._jobEl.textContent = job;
  }
}
