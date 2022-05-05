import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,} from 'react-native';
import commonStyle from "../resource/styles/commonStyles";
import TextInputCustomComponent from "../components/TextInputCustomComponent";
import {useDispatch} from "react-redux";
import {Strings} from "../resource/Strings";
import ButtonCustomComponent from "../components/ButtonCustomComponent";
import colors from '../constants/colors';
import Validator from "../utils/validation";
import {veryCodePhoneNumber} from "../repositories/service/loginWithPhoneService";
import VeryCodePhoneNumberRequest from "../repositories/remote/request/auth/VeryCodePhoneNumberRequest";
import {setAppStateAction} from "../actions/appStateActions";
import common from "../utils/common";
import constant from "../constants/constant";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

function VerifyCodeScreen({route}) {
  const {phone} = route?.params;
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const invalid = () => {
    let errCodeRequire = Validator.required(code);
    if (!errCodeRequire) {
      setErrorMessage('Mã Code không được để trống');
      return true;
    }

    return false;
  };

  const handleLogin = () => {
    if (invalid()) {
      return;
    }
    setErrorMessage(null);
    const veryCodePhoneNumberRequest = new VeryCodePhoneNumberRequest();
    veryCodePhoneNumberRequest.addParam(
      VeryCodePhoneNumberRequest.Keys.TO,
      `+${phone}`,
    );
    veryCodePhoneNumberRequest.addParam(
      VeryCodePhoneNumberRequest.Keys.CODE, code,
    );

    veryCodePhoneNumber(veryCodePhoneNumberRequest, response => {
      if (response && response?.status >= 200 && response?.status < 300) {
        if (response?.data?.valid) {
          dispatch(setAppStateAction({
            isLoggedIn: true,
          }));
        } else {
          common.showAlertOneChoice('Mã code không đúng vui lòng thử lại')
        }

      }
    });
  };

  return(
    <SafeAreaView style={[commonStyle.flex1, {backgroundColor: colors.white}]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
          style={{height: constant.HEIGHT - 50}}
          behavior={'padding'}
          keyboardVerticalOffset={50}>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{ flex: 1, paddingVertical: 24}}>
            <View>
              <Text style={{ color: colors.colorTextTitle}}>仮登録中の電話番号</Text>
              <Text style={{ color: colors.colorTextTitle, fontWeight: 'bold', fontSize: constant.WIDTH <= 360 ? 21 : 30, marginTop: 8, paddingBottom: constant.WIDTH <= 360 ? 12 : '10%'}}>{ phone}</Text>
            </View>
            <Text style={{ color: colors.colorTextTitle, fontSize: constant.WIDTH <= 360 ? 10 : 16,  fontWeight: 'bold'}}>
              {'登録の電話番号に仮登録完了のメッセージを送信しまし\n' +
              'た。\n' +
              'メッセージに記載されている確認コードを入力して電話番\n' +
              '号確認を完了してください。\n' +
              '\n' +
              '電話番号確認後にログインパスワードの設定をする\n' +
              'とキリン堂会員登録は完了となります。\n'}
            </Text>
          </View>
          <View style={[commonStyle.flex1, {paddingTop: '10%'}]}>
            <Text style={{color: colors.colorTextTitle, fontWeight: 'bold'}}>確認コード</Text>
            <TextInputCustomComponent
              updateState={setCode}
              keyboardType={'number-pad'}
              value={code}
              maxLength={6}
              styleContainer={{marginTop: 24, borderWidth: 0}}
              error={errorMessage}
            />
            <ButtonCustomComponent
              label={Strings.btnSubmitPhone}
              onPress={handleLogin}
            />
          </View>
        </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

VerifyCodeScreen.propTypes = {};

const styles = StyleSheet.create({

});

export default VerifyCodeScreen;
