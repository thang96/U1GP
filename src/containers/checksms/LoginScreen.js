import React, {Component, useState} from 'react';
import {
  Text, View, StyleSheet, TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import commonStyle from "../../resource/styles/commonStyles";
import constant from "../../constants/constant";
import TextInputCustomComponent from "../../components/TextInputCustomComponent";
import {useDispatch} from "react-redux";
import {Strings} from "../../resource/Strings";
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import colors from '../../constants/colors';
import Validator from "../../utils/validation";
import SendPhoneNumberRequest from "../../repositories/remote/request/auth/SendPhoneNumberRequest";
import {sendCodePhoneNumber} from "../../repositories/service/loginWithPhoneService";
import {navigateAction} from "../../actions/navigationActions";
import routeNames from "../../navigators/routeNames";
import common from "../../utils/common";

function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const invalid = () => {
    let errPhoneRequire = Validator.required(phone);
    let errRegex = Validator.phoneCountry(phone);
    if (!errPhoneRequire) {
      setErrorMessage('Số điện thoại không được để trống');
      return true;
    }
    if (!errRegex) {
      setErrorMessage('Số điện thoại không đúng định dạng');
      return true;
    }
    return false;
  };

  const handleLogin = () => {

    if (invalid()) {
      return;
    }
    setErrorMessage(null);
    const sendPhoneNumberRequest = new SendPhoneNumberRequest();
    sendPhoneNumberRequest.addParam(
      SendPhoneNumberRequest.Keys.TO,
      `+${phone}`,
    );
    sendPhoneNumberRequest.addParam(
      SendPhoneNumberRequest.Keys.FROM,
      constant.NUMBER_PHONE_AUTH,
    );
    sendPhoneNumberRequest.addParam(
      SendPhoneNumberRequest.Keys.CHANNEL,
      'sms',
    );
    sendCodePhoneNumber(sendPhoneNumberRequest, response => {
      if (response && response?.status >= 200 && response?.status < 300) {
        dispatch(
          navigateAction({
            name: routeNames.VerifyCodeScreen,
            params: {
              phone: phone,
            },
          }),
        );
      } else {
        common.showAlertOneChoice('Không thể gửi mã code vui lòng thử lại sau')
      }
    });
  };

  return(
    <SafeAreaView style={[commonStyle.flex1, {backgroundColor: colors.white}]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View/>
          <View style={[commonStyle.flex1, {justifyContent: 'center'}]}>
            <Text style={{color: colors.colorTextTitle, fontWeight: 'bold'}}>電話番号で認証（SMS認証）</Text>
            <TextInputCustomComponent
              placeholder={Strings.placeholderPhone}
              updateState={setPhone}
              keyboardType={'number-pad'}
              value={phone}
              styleContainer={{marginTop: 24, borderWidth: 0}}
              error={errorMessage}
            />
          </View>
          <ButtonCustomComponent
            label={Strings.btnSubmitPhone}
            onPress={handleLogin}
            customStyle={{ marginBottom: Platform.OS === 'ios' ? 10 : 30}}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

LoginScreen.propTypes = {};

const styles = StyleSheet.create({

});

export default LoginScreen;
