/* eslint-disable no-useless-escape */
const REGEX = {
  email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  password: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'),
  passwordStrong: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'),
  passwordMedium: new RegExp('^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.*[0-9]))|((?=.*[!@#\$%\^&\*])(?=.*[A-Z])(?=.*[0-9])))(?=.{7,})'),
  passwordSoSo: new RegExp('^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{5,})'),
  passwordWeek: new RegExp('^(((?=.*[a-z]))|((?=.*[A-Z])))(?=.{3,})'),
  checkNAN: new RegExp(/[a-zA-Z]/g),
  username: 'A-Za-z',
};

export default REGEX;
