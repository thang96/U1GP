function isUsername(username) {
  const re = /^[A-Za-z\d]{2,}$/;
  return re.test(username);
}

function isEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function isPhone(phone) {
  const re = /^[0]\d{9}$/;
  return re.test(phone);
}

function isPhoneCountry(phone) {
  const re = /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){7,13}\d$/;
  return re.test('+' + phone);
}

function isCaptcha(text) {
  const re = /^[a-zA-Z0-9]*$/;
  return re.test(text);
}

function isPassword(password) {
  // const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;
  const re = /^.{8,}$/;
  return re.test(password);
}

const billCode = text => {
  return !!(text && text !== '' && text.length <= 10);
};

const detailDescribe = text => {
  return !!(text && text !== '' && text.length <= 1000);
};

const required = text => {
  return !!(text && text !== '');
};

const username = text => {
  return !!(text && text !== '' && isUsername(text) && text.length <= 32);
};

const password = text => {
  return !!(text && text !== '' && isPassword(text) && text.length <= 32);
};

const name = text => {
  return !!(text && text.trim() !== '' && text.length <= 32);
};

// eslint-disable-next-line no-shadow
const confirmPassword = (password, rePassword) => {
  return password === rePassword;
};

const email = text => {
  return !!(text && text !== '' && isEmail(text) && text.length <= 255);
};

const phone = text => {
  return !!(text && text !== '' && isPhone(text));
};

const phoneCountry = (text) => {
  return !!(text && text !== '' && isPhoneCountry(text));
};

const captcha = text => {
  return !!(text && text !== '' && isCaptcha(text));
};

const Validator = {
  required,
  username,
  password,
  confirmPassword,
  email,
  name,
  phone,
  captcha,
  billCode,
  detailDescribe,
  phoneCountry,
};

export default Validator;
