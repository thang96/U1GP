import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../constants/colors';
import TextInputCustomComponent from '../../components/TextInputCustomComponent';
import ModalDropdownComponent from '../../components/ModalDropdownComponent';
import commonStyle from '../../resource/styles/commonStyles';
import constant from '../../constants/constant';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import common from '../../utils/common';
import Picker from '../../components/Picker';

function RegisterToVote01(props) {
  const actionSheetIsImage = useRef(null);
  const dispatch = useDispatch();
  const [filePhoto, setFilePhoto] = useState(null);
  const [albumImage, setAlbumImage] = useState({
    imageUse: {
      key: 'imageUse',
      img: null,
      imgActive: false,
    },
  });

  const [valueToVote, setValueToVote] = useState({
    nickName: {
      value: '',
      key: 'nickName',
      placeHolder: 'ニックネーム',
      errorMessage: null,
    },
    licenseHistory: {
      key: 'licenseHistory',
      value: '',
      data: [
        {label: '免許なし', value: 10},
        {label: '取得から3年以上', value: 20},
        {label: '取得から5年以上', value: 30},
        {label: '取得から10年以上', value: 40},
        {label: '取得から20年以上', value: 50},
      ],
    },
    age: {
      key: 'age',
      value: '',
      data: [
        {label: '10歳未満', value: 10},
        {label: '10代', value: 20},
        {label: '20代', value: 30},
        {label: '30代', value: 40},
        {label: '40代', value: 50},
        {label: '50代', value: 60},
        {label: '60代', value: 70},
        {label: '70歳以上', value: 8},
      ],
    },
    gender: {
      key: 'gender',
      value: '',
      data: [
        {label: '選択なし', value: 1},
        {label: '男性', value: 2},
        {label: '女性', value: 3},
      ],
    },

    province: {
      key: 'province',
      value: '',
      data: [
        {label: '北海道', value: 1},
        {label: '青森県', value: 2},
        {label: '岩手県', value: 3},
        {label: '宮城県', value: 4},
        {label: '秋田県', value: 5},
        {label: '山形県', value: 6},
        {label: '福島県', value: 7},
        {label: '茨城県', value: 8},
        {label: '栃木県', value: 9},
        {label: '群馬県', value: 10},
        {label: '埼玉県', value: 11},
        {label: '千葉県', value: 12},
        {label: '東京都', value: 13},
        {label: '神奈川県', value: 14},
        {label: '新潟県', value: 15},
        {label: '富山県', value: 16},
        {label: '石川県', value: 17},
        {label: '福井県', value: 18},
        {label: '山梨県', value: 19},
        {label: '長野県', value: 20},
        {label: '岐阜県', value: 21},
        {label: '静岡県', value: 22},
        {label: '愛知県', value: 23},
        {label: '三重県', value: 24},
        {label: '滋賀県', value: 25},
        {label: '京都府', value: 26},
        {label: '大阪府', value: 27},
        {label: '兵庫県', value: 28},
        {label: '奈良県', value: 29},
        {label: '和歌山県', value: 30},
        {label: '鳥取県', value: 31},
        {label: '島根県', value: 32},
        {label: '岡山県', value: 33},
        {label: '広島県', value: 34},
        {label: '山口県', value: 35},
        {label: '徳島県', value: 36},
        {label: '香川県', value: 37},
        {label: '愛媛県', value: 38},
        {label: '高知県', value: 39},
        {label: '福岡県', value: 40},
        {label: '佐賀県', value: 41},
        {label: '長崎県', value: 42},
        {label: '熊本県', value: 43},
        {label: '大分県', value: 44},
        {label: '宮崎県', value: 45},
        {label: '鹿児島県', value: 46},
        {label: '沖縄県', value: 47},
      ],
    },
    currentCar: {
      value: '',
      key: 'currentCar',
      placeHolder: '',
      errorMessage: null,
    },
    successiveCarModels: {
      value: '',
      key: 'successiveCarModels',
      placeHolder: '',
      errorMessage: null,
    },
    carModelYouWant: {
      value: '',
      key: 'carModelYouWant',
      placeHolder: '',
      errorMessage: null,
    },
    describe: {
      value: '',
      key: 'describe',
      placeHolder: '',
      errorMessage: null,
    },
    touringArea: {
      value: '',
      key: 'touringArea',
      placeHolder: 'フリーテキスト',
      errorMessage: null,
    },
    gear: {
      value: '',
      key: 'gear',
      placeHolder: 'フリーテキスト',
      errorMessage: null,
    },
  });

  const submittable = useMemo(() => {
    return Boolean(
      valueToVote.nickName.value &&
        valueToVote.licenseHistory.value.value &&
        valueToVote.age.value.value &&
        valueToVote.gender.value.value &&
        valueToVote.province.value.value,
    );
  }, [
    valueToVote.nickName.value,
    valueToVote.licenseHistory.value,
    valueToVote.age.value,
    valueToVote.gender.value,
    valueToVote.province.value,
  ]);

  function updateValueToVote(key, value) {

    console.log(`\n \n key:   ${key} \n \n`);
 
    setValueToVote(prevValueToVote => {
      let newValueToVote = {...valueToVote};
      newValueToVote[key].value = value;
      return newValueToVote;
    });
  }

  const onChangeOption = keyField => {
    return selected => {
      setValueToVote(prevValueToVote => {
        let cloneValueToVote = {...prevValueToVote};
        cloneValueToVote[keyField].value = selected;
        return cloneValueToVote;
      });
    };
  };
  const [isDoubleClick, setIsDoubleClick] = useState(true);

  const renderActionSheet = () => {
    const optionsIsImage = ['写真を撮る', 'ライブラリから選ぶ', 'キャンセル'];
    return (
      <ActionSheet
        useNativeDriver={true}
        ref={actionSheetIsImage}
        options={optionsIsImage}
        cancelButtonIndex={2}
        onPress={index => {
          switch (index) {
            case 0:
              isDoubleClick ? openCamera() : null;
              break;
            case 1:
              isDoubleClick ? openGallery() : null;
              break;
            default:
              break;
          }
        }}
      />
    );
  };

  const openCamera = () => {
    setIsDoubleClick(false);
    common.pickImageFromCamera(
      async result => {
        await addNewImage(result);
      },
      onFalse => {
        setIsDoubleClick(true);
      },
    );
  };

  const openGallery = () => {
    setIsDoubleClick(false);
    common.pickImageFromGallery(
      async result => {
        await addNewImage(result);
      },
      onFalse => {
        setIsDoubleClick(true);
      },
    );
  };

  const renderTitle = (title, content) => {
    
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'meiryo',
            color: colors.colorPageText,
          }}>
          {title}
        </Text>
        <Text
          style={{
            marginLeft: 20,
            color: colors.colorPageText,
            fontSize: 12,
            fontFamily: 'meiryo',
          }}>
          {content}
        </Text>
      </View>
    );
  };

  const addNewImage = async result => {
    const newAlbum = {...albumImage};
    const imageConverted = await common.resizeImageNotVideo(result);
    setFilePhoto(result);

    const isImgActive = Object.values(newAlbum).find(value => value.imgActive);
    if (imageConverted?.uri) {
      isImgActive.img = imageConverted;
    }
    setAlbumImage(newAlbum);
    setIsDoubleClick(true);
  };

  const showActionSheet = () => {
    if (actionSheetIsImage.current === null) {
      return;
    }
    actionSheetIsImage.current.show();
  };

  const handleImage = keys => {
    const newAlbum = {...albumImage};
    Object.keys(albumImage).forEach(key => {
      newAlbum[key].imgActive = keys === key;
    });
    setAlbumImage(newAlbum);
  };

  const checkImageInList = key => {
    const newAlbum = {...albumImage};
    const isImgActive = Object.values(newAlbum).find(
      value => value.key === key,
    );
    return !isImgActive?.img;
  };


  console.log(valueToVote);
  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={-20}
        style={{flex: 1, paddingHorizontal: 10}}>
        <View style={{flex: 10, justifyContent: 'center', marginVertical: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              fontFamily: 'meiryo',
              fontSize: 17,
              color: colors.colorPageText,
            }}>
            ユーザー登録
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInputCustomComponent
            updateState={value => {
              updateValueToVote(valueToVote.nickName.key, value);
            }}
            isShadow={false}
            placeholderColor="rgb(197,196,196)"
            placeholder={valueToVote.nickName.placeHolder}
            value={valueToVote.nickName.value}
          />
          <TouchableOpacity
            onPress={() => {
              handleImage('imageUse');
              showActionSheet();
            }}
            style={{marginLeft: 20}}>
            <Image
              source={
                checkImageInList('imageUse')
                  ? icons.cameraPicture
                  : {uri: albumImage.imageUse?.img?.uri}
              }
              style={{
                height: 50,
                width: 50,
                borderRadius: 60,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            
            <Picker
              selected={valueToVote.licenseHistory.value}
              placeholder="免許歴"
              options={valueToVote.licenseHistory.data}
              onChange={onChangeOption(valueToVote.licenseHistory.key)}
            />

            <View style={{width: 15}} />
         
            <Picker
              selected={valueToVote.age.value}
              placeholder="年齢"
              options={valueToVote.age.data}
              onChange={onChangeOption(valueToVote.age.key)}
            />
          </View>
          <View style={{marginLeft: 64}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              marginTop: 20,
            }}>
          
            <Picker
              selected={valueToVote.gender.value}
              placeholder="性別"
              options={valueToVote.gender.data}
              onChange={onChangeOption(valueToVote.gender.key)}
            />

            <View style={{width: 15}} />
            
            <Picker
              selected={valueToVote.province.value}
              placeholder="都道府県"
              options={valueToVote.province.data}
              onChange={onChangeOption(valueToVote.province.key)}
            />
          </View>
          <View style={{marginLeft: 64}} />
        </View>
        {renderTitle('現愛車', '複数の場合はカンマ区切り')}
        <TextInputCustomComponent
          updateState={(value) => {
            updateValueToVote(valueToVote.currentCar.key, value);
          }}
          isShadow={false}
          placeholder={valueToVote.currentCar.placeHolder}
          value={valueToVote.currentCar.value}
          styleContainer={{marginVertical: 0}}
        />
        {renderTitle('歴代車種', '複数の場合はカンマ区切り')}
        <TextInputCustomComponent
          updateState={() => {
            updateValueToVote(valueToVote.successiveCarModels.key);
          }}
          isShadow={false}
          placeholder={valueToVote.successiveCarModels.placeHolder}
          value={valueToVote.successiveCarModels.value}
          styleContainer={{marginVertical: 0}}
        />
        {renderTitle('欲しい車種', '複数の場合はカンマ区切り')}
        <TextInputCustomComponent
          updateState={(value) => {
            updateValueToVote(valueToVote.carModelYouWant.key, value);
          }}
          isShadow={false}
          placeholder={valueToVote.carModelYouWant.placeHolder}
          value={valueToVote.carModelYouWant.value}
          styleContainer={{marginVertical: 0}}
        />
        {renderTitle('ツーリングエリア', '')}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueToVote.touringArea.placeHolder}
            placeholderTextColor={'rgb(197,196,196)'}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueToVote.touringArea.value}
            onChangeText={text =>
              updateValueToVote(valueToVote.touringArea.key, text)
            }
          />
        </View>
        {renderTitle('ギア', '')}
        <View style={[styles.textAreaContainer, {marginBottom: 30}]}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueToVote.gear.placeHolder}
            placeholderTextColor={'rgb(197,196,196)'}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueToVote.gear.value}
            onChangeText={text => updateValueToVote(valueToVote.gear.key, text)}
          />
        </View>

        <TouchableOpacity
          disabled={!submittable}
          style={{
            backgroundColor: submittable ? '#509BE6' : colors.btnNext,
            width: constant.WIDTH / 3,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 5,
            marginTop: 12,
            padding: 6,
          }}
          onPress={() => {
            dispatch(
              navigateAction({
                name: 'RegisterToVote02',
                params: {
                  nickName: valueToVote.nickName?.value,
                  photo_0: filePhoto,
                  licenseHistory: valueToVote.licenseHistory.value?.value,
                  age: valueToVote.age.value?.value,
                  sex: valueToVote.gender.value?.value,
                  province: valueToVote.province.value?.value,
                  currentCar: valueToVote.currentCar?.value,
                  successiveCarModels:
                    valueToVote.successiveCarModels?.value,
                  carModelYouWant: valueToVote.carModelYouWant?.value,
                  describe: valueToVote.describe?.value,
                  touringArea: valueToVote.touringArea?.value,
                  gear: valueToVote.gear?.value,
                },
              }),
            );
          }}>
          <Text
            style={{
              fontSize: constant.HEIGHT > 700 ? 24 : 14,
              paddingVertical: Platform.OS === 'ios' ? 5 : 0,
              alignSelf: 'center',
              color: colors.white,
              fontWeight: 'bold',
            }}>
            次へ
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      {renderActionSheet()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textAreaContainer: {
    paddingHorizontal: 10,
    flex: 1,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.white,
    height: 80,
  },
  textArea: {
    justifyContent: 'flex-start',
    fontSize: 14,
    paddingRight: 8,
    color: 'black',
  },
});

export default RegisterToVote01;
