import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';

const textInputStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    color: colors.red,
    fontSize: 12,
    marginTop: Platform.OS === 'ios' ? 6 : 3,
  },
  inputError: {
    borderWidth: 2,
    borderColor: colors.red,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
  },
  labelNote: {
    color: colors.red,
    fontSize: 12,
    marginBottom: 6,
    marginTop: 3,
  },
  mb0: {
    marginBottom: 0,
  },
  required: {
    color: colors.red,
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    borderColor: colors.black,
    borderWidth: 0,
    marginTop: 4,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
  },
});

export default textInputStyle;
