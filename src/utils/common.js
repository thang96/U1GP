import moment from 'moment';
import {Alert} from 'react-native';

function formatNumber(number) {
  if (!number) {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatDate(date) {
  return moment(date).utc().format('DD/MM/YYYY');
}

function formatDateTime(date, isRevert = false) {
  return moment(date)
    .utc()
    .format(isRevert ? 'DD/MM/YYYY - HH:mm' : 'HH:mm DD/MM/YYYY');
}

function searchSelectOption(label, arrayObject, key = 'label') {
  const result = [];

  for (let i = 0; i < arrayObject.length; i++) {
    if (
      (arrayObject[i][key].indexOf('Tất cả') === -1 || !label) &&
      arrayObject[i][key].toLowerCase().search(label.toLowerCase()) >= 0
    ) {
      result.push(arrayObject[i]);
    }
  }

  return result;
}

function showAlertCaution(message, onCancel, onConfirm) {
  Alert.alert('Thông báo', message, [
    {
      text: 'Huỷ',
      style: 'cancel',
      onPress: () => {
        if (onCancel) {
          onCancel();
        }
      },
    },
    {
      text: 'Đồng ý',
      onPress: () => {
        onConfirm();
      },
    },
  ]);
}

function showAlertOneChoice(message, labelButton, onConfirm) {
  Alert.alert('Thông báo', message, [
    {
      text: labelButton,
      onPress: () => {
        if (onConfirm) {
          onConfirm();
        }
      },
    },
  ]);
}

function getFileName(file) {
  if (file.name !== undefined) {
    return file.name;
  } else if (file.filename !== undefined && file.filename !== null) {
    return file.filename;
  } else {
    const type = file?.mime || file?.type;
    return (
      Math.floor(Math.random() * Math.floor(999999999)) +
      '.' +
      type.split('/')[1]
    );
  }
}

const common = {
  formatNumber,
  formatDate,
  searchSelectOption,
  formatDateTime,
  showAlertCaution,
  showAlertOneChoice,
  getFileName,
};

export default common;
