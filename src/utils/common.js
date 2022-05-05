import moment from 'moment';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';

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

function pickImageFromCamera(onSuccess, onFailure) {
  ImagePicker.openCamera({
    width: 900,
    height: 1200,
    cropperCancelText:'キャンセル',
    cropperChooseText:'撮影する'
  })
    .then(image => {
      onSuccess(image);
    })
    .catch(err => {
      if (err.code !== 'E_PICKER_CANCELLED') {
        console.log(err);
      }
      onFailure();
    });
}

function pickImageFromGallery(onSuccess, onFailure) {
  ImagePicker.openPicker({
    multiple: false,
    width: 1200,
    height: 1200,
    cropping: false,
    // cropperChooseText: '設定',
    // cropperCancelText: 'キャンセル',
    // cropperToolbarTitle: Platform.OS === 'ios' ? '' : '写真を編集する',
  })
    .then(images => {
      onSuccess(images);
    })
    .catch(err => {
      if (err.code !== 'E_PICKER_CANCELLED') {
      }
      onFailure();
    });
}

function checkSizeImageChat(element) {
  if (!element?.size) {
    return false;
  }
  return element.size / 1024 / 1024 <= 8;
}



async function resizeImageNotVideo(image) {
  let convert = {};
  let isShowAlertImage = true;
  await ImageResizer.createResizedImage(image.path, 1000, 1000, 'JPEG', 100)
    .then(response => {
      if (checkSizeImageChat(response)) {
        convert = {
          ...response,
          mime: image?.mime,
          type: image?.mime,
          uri:
            Platform.OS === 'ios' ? '/private' + response.path : response.uri,
        };
      } else if (isShowAlertImage) {
        isShowAlertImage = false;
        Alert.alert(
          '',
          '画像ファイルは8MB以下選んでください。',
          [
            {
              text: '閉じる',
            },
          ],
          {
            cancelable: false,
          },
        );
      }
    })
    .catch(err => {
      console.log(err);
    });
  return convert;
}
function getFileNameFromPath(_path) {
  if (_path !== undefined && _path !== null) {
    return _path.replace(/^.*[\\\/]/, '');
  } 
  else {
    return ""
  }
}
const postFileImg = (name) => {
  if(name == ''){
    return null
  }
    const form  = {
      uri: name,
      name: getFileNameFromPath(name),
      type: 'image/jpeg',
    }
    return  form
}

const common = {
  formatNumber,
  formatDate,
  getFileNameFromPath,
  searchSelectOption,
  formatDateTime,

  showAlertCaution,
  showAlertOneChoice,
  getFileName,
  pickImageFromCamera,
  pickImageFromGallery,
  resizeImageNotVideo,
  postFileImg
};

export default common;
