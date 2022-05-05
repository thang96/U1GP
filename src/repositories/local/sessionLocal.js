import AsyncStorage from '@react-native-community/async-storage';

const KEY_SESSION = 'access_token';
const KEY_REFRESH = 'refresh_token';

async function getAccessToken() {
  const session = await AsyncStorage.getItem(KEY_SESSION);
  return session || '';
}

async function getRefreshToken() {
  const session = await AsyncStorage.getItem(KEY_REFRESH);
  return session || '';
}

function save(accessToken) {
  return AsyncStorage.setItem(KEY_SESSION, accessToken);
}

function saveIsTermOfUser(isTermOfUser) {
  return AsyncStorage.setItem('isTermOfUser', isTermOfUser);
}

async function getIsTermOfUser() {
  const session = await AsyncStorage.getItem('isTermOfUser');
  return session || '';
}

function saveRefreshToken(refreshToken) {
  return AsyncStorage.setItem(KEY_REFRESH, refreshToken);
}

function clearAccessToken() {
  return AsyncStorage.removeItem(KEY_SESSION);
}

module.exports = {
  getAccessToken,
  save,
  clearAccessToken,
  getRefreshToken,
  saveRefreshToken,
  saveIsTermOfUser,
  getIsTermOfUser,
};
