import React, {useState, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';
import {icons} from '../constants';
import stylesRegisterCompete03 from '../resource/styles/registerCompete03Style';
import commonStyle from '../resource/styles/commonStyles';
import colors from '../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputCustomComponent from '../components/TextInputCustomComponent';
import ModalDropdownComponent from '../components/ModalDropdownComponent';
import constant from '../constants/constant';
import {navigateAction} from '../actions/navigationActions';
import ButtonCustomComponent from '../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import Picker from '../components/Picker';

function RegisterToCompete03(props) {
  const dispatch = useDispatch();

  const [valueRegister, setValueRegister] = useState({
    entrySection: {
      value: '',
      key: 'entrySection',
      data: [
        {label: 'ミニバイク（125cc以下）', value: 1},
        {label: 'BIGスクーター', value: 2},
        {label: 'ネイキッド', value: 3},
        {label: 'スポーツ＆レプリカ', value: 4},
        {label: 'ツアラー', value: 5},
        {label: 'アメリカン', value: 6},
        {label: 'ストリート', value: 7},
        {label: 'オフロード', value: 8},
      ],
    },
    machineName: {
      value: '',
      key: 'machineName',
      placeHolder: 'マシン愛称',
      errorMessage: null,
    },
    baseMachine: {
      value: '',
      key: 'baseMachine',
      placeHolder: 'CBR1000RRW',
      errorMessage: null,
    },
    appealPoint: {
      key: 'appealPoint',
      value: '',
      placeHolder: 'アピールポイント',
      errorMessage: null,
    },
    description: {
      key: 'description',
      value: '',
      placeHolder: 'カスタム説明／概算総費用',
      errorMessage: null,
    },
    bykeMaker: {
      key: 'bykeMaker',
      value: '',
      placeHolder: '',
      data: [
        {label: 'ホンダ', value: 1},
        {label: 'ヤマハ', value: 2},
        {label: 'カワサキ', value: 3},
        {label: 'スズキ', value: 4},
        {label: 'ハーレー', value: 5},
        {label: 'BMW', value: 6},
        {label: 'KTM', value: 7},
        {label: 'ドゥカティ', value: 8},
        {label: 'トライアンフ', value: 9},
        {label: 'その他', value: 10},
      ],
    },
  });

  const submittable = useMemo(() => {
    return Boolean(
      valueRegister.entrySection.value.value && valueRegister.machineName.value,
      
    );
  }, [valueRegister.entrySection.value, valueRegister.machineName.value]);

  const route = new useRoute();
  const photo_1 = route.params.albumImage.imageOne.img?.uri ?? '';
  const photo_2 = route.params.albumImage.imageTwo.img?.uri ?? '';
  const photo_3 = route.params.albumImage.imageThree.img?.uri ?? '';
  const photo_4 = route.params.albumImage.imageFour.img?.uri ?? '';
  const photo_5 = route.params.albumImage.imageFive.img?.uri ?? '';
  const photo_6 = route.params.albumImage.imageSix.img?.uri ?? '';
  function updateValueRegister(key, value) {
    const newValue = {...valueRegister};
    const fieldChanged = newValue[key];
    fieldChanged.value = value;
    setValueRegister(newValue);
  }

  const onChangeOption2 = keyField => {
    return selected => {
      setValueRegister(prevValueToVote => {
        let cloneValueToVote = {...prevValueToVote};
        cloneValueToVote[keyField].value = selected;
        return cloneValueToVote;
      });
    };
  };
  const renderTitle = (title, content) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'meiryo',
            color: colors.colorPageText,
            marginLeft: 10,
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
  return (
    <SafeAreaView style={stylesRegisterCompete03.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={-20}
        style={{flex: 1, paddingHorizontal: 15}}>
        <View style={{flex: 10, justifyContent: 'center', marginVertical: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              fontFamily: 'meiryo',
              fontSize: 17,
              color: colors.colorPageText,
            }}>
            参戦するバイクのことを教えてください
          </Text>
        </View>
        {renderTitle('エントリー部門')}
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Picker
            selected={valueRegister.entrySection.value}
            placeholder=""
            options={valueRegister.entrySection.data}
            onChange={onChangeOption2(valueRegister.entrySection.key)}
          />

          <TouchableOpacity
            style={{
              marginLeft: 10,
              backgroundColor: '#D0D0D0',
              width: 31,
              height: 31,
              borderRadius: 31,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image resizeMode="contain" source={icons.question} />
          </TouchableOpacity>
        </View>
        {renderTitle('マシン愛称')}
        <TextInputCustomComponent
          updateState={(text) => {
            updateValueRegister(valueRegister.machineName.key, text);
          }}
          isShadow={false}
          placeholder={valueRegister.machineName.placeHolder}
          placeholderTextColor={'rgb(197,196,196)'}
          value={valueRegister.machineName.value}
          styleContainer={{marginVertical: 0, marginBottom: 10}}
        />
        {renderTitle('ベースマシン')}
        <TextInputCustomComponent
          updateState={(text) => {
            updateValueRegister(valueRegister.baseMachine.key,text);
          }}
          isShadow={false}
          placeholder={valueRegister.baseMachine.placeHolder}
          placeholderTextColor={'rgb(197,196,196)'}
          value={valueRegister.baseMachine.value}
          styleContainer={{marginVertical: 0, marginBottom: 10}}
        />
        {renderTitle('メーカー&ブランド')}
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            width: '65%',
          }}>
          <Picker
            selected={valueRegister.bykeMaker.value}
            placeholder=""
            options={valueRegister.bykeMaker.data}
            onChange={onChangeOption2(valueRegister.bykeMaker.key)}
          />
          
        </View>
        {renderTitle('アピールポイント')}
        <View style={[styles.textAreaContainer, {marginBottom: 10}]}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueRegister.appealPoint.placeHolder}
            placeholderTextColor={'rgb(197,196,196)'}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueRegister.appealPoint.value}
            onChangeText={text =>
              updateValueRegister(valueRegister.appealPoint.key, text)
            }
          />
        </View>
        {renderTitle('カスタム説明／概算総費用')}
        <View style={styles.textAreaContainer}>
          <TextInput
          keyboardType='numeric'
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueRegister.description.placeHolder}
            placeholderTextColor={'rgb(197,196,196)'}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueRegister.description.value}
            onChangeText={text =>
              updateValueRegister(valueRegister.description.key, text)
            }
          />
        </View>
        <View>
          <Text style={{marginStart: 8, fontSize: 12, marginTop: 5}}>
            ※エントリーすると修正ができません。よろしいですか？
          </Text>
        </View>
        <TouchableOpacity
          disabled={!submittable}
          style={{
            backgroundColor: submittable ?'#509BE6': colors.btnNext ,
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
                name: 'RegisterToCompete04',
                params: {
                  entrySection: valueRegister.entrySection.value,
                  machineName: valueRegister.machineName.value,
                  baseMachine: valueRegister.baseMachine.value,
                  bykeMaker: valueRegister.bykeMaker.value,
                  appealPoint: valueRegister.appealPoint.value,
                  description: valueRegister.description.value,
                  photo_1: photo_1,
                  photo_2: photo_2,
                  photo_3: photo_3,
                  photo_4: photo_4,
                  photo_5: photo_5,
                  photo_6: photo_6,
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
    height: 109,
  },
  textArea: {
    justifyContent: 'flex-start',
    fontSize: 14,
    paddingRight: 8,
    color: 'black',
  },
});

export default RegisterToCompete03;
