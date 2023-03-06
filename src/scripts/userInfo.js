export default class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }
  getUserInfo() {
    return {
      name: this._userName,
      job: this._userJob,
    };
  }
  setUserInfo(value) {
    this._userName = value.name;
    this._userJob = value.job;
  }
}
