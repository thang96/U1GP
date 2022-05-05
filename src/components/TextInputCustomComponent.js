import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Keyboard,
} from 'react-native';
import colors from '../constants/colors';
import commonStyle from "../resource/styles/commonStyles";

const TextInputCustomComponent = ({
  value,
  label,
  keyboardType,
  placeholder,
  placeholderColor,
  updateState,
  error,
  errorValidate,
  styleCustom,
  styleContainer,
  isShadow = true,
  maxLength,
  isPassword = false,
  ...props
}) => {
  return (
    <View style={{ flex: 1}}>
      <View
        style={[
          stylesInput.container,
          styleContainer,
          error && stylesInput.inputError,
          {shadow: isShadow ? {...commonStyle.shadow} : ''}
        ]}>
        <TextInput
          {...props}
          value={value}
          secureTextEntry={isPassword}
          keyboardType={keyboardType ?? 'default'}
          returnKeyType={'done'}
          style={[stylesInput.textInput, styleCustom]}
          onChangeText={text => updateState(text)}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          maxLength={maxLength}
        />
        {error ? <View style={stylesInput.borderBottom} /> : <View />}
      </View>
      {error ? <Text style={stylesInput.error}>{error}</Text> : null}
    </View>
  );
};

const stylesInput = StyleSheet.create({
  container: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginVertical: 12,
  },
  textInput: {
    height:Platform.OS === 'ios' ? 35: 40,
    width: '100%',
    marginTop: 4,
    color:'rgb(65,65,65)'
  },
  inputError: {
    borderWidth: 2,
    borderColor: colors.red,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
  },
  error: {
    color: colors.red,
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 0 : 3,
  },
});

export default TextInputCustomComponent;
