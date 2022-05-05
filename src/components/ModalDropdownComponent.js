import React, {useMemo} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import textInputStyle from '../resource/styles/textInputStyle';
import colors from '../constants/colors';
import IconDownArrowGrey from '../resource/icon/ic-down-arrow.svg';
import {icons,images} from '../constants'
const ModalDropdownComponent = ({
  data,
  customStyle = {},
  customStyleBorder = {},
  customInput = {},
  onValueChange,
  errorMessage,
  value,
  disable = false,
  showIconArrowDown = true,
  isStyleButton = true,
  textColor,
  countryCodeStyle = {},
  label,
  borderBottomWidth,
  placeholder = '未設定',
  type = '',
  title = '',
  pickerView = {},
  // showPlaceHolder=true
}) => {
  let inputRef = null;
console.log("VALUE: ", value);

const options = useMemo(() => {
  if(!value) return data
  return [{label: placeholder, value: ''}, ...data]
}, [data, placeholder, value])
 
  return (
    <View style={[{flex: 1}, customStyle]}>
      <View
        style={[
          // textInputStyle.textInput,
          styles.container,
          countryCodeStyle,
          {borderColor: errorMessage ? colors.red : colors.borderColor},
          customStyleBorder,
        ]}>
        {label}
        <View style={[pickerView]}>
          <RNPickerSelect
            pickerProps={{
              accessibilityLabel: value?.label ?? "",
          }}
            items={options}
            onValueChange={onValueChange}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              inputRef = el;
            }}
            style={isStyleButton ? {...pickerSelectStyles} : {...customInput}}
            fixAndroidTouchableBug={true}
            placeholder={{}}
            // placeholder={
            //   type === 'basic' ? {} :{label: placeholder, value: ''}
            // }
            value={value?.value}
            doneText={'完了'}
            onClose={() => {}}
            disabled={disable}
            // onDonePress={() => inputRef.togglePicker(true)}
            textInputProps={textColor ? textColor : null}
            Icon={() => {
              return (
                <>
                  {showIconArrowDown ? (
                    <View style={styles.icDropDown}>
                      <IconDownArrowGrey />
                    </View>
                  ) : null}
                </>
              );
            }}
          >
            <View style={{flexDirection:'row',paddingHorizontal:5}}>
              <Text numberOfLines={1} style={{flex:1, marginTop: 5,color:'rgb(65,65,65)'}}>{value?.label ?? placeholder}</Text>
              <Image source={icons.sortDow} style={{width:20,height:25}}></Image>
            </View>

          </RNPickerSelect>
        </View>
      </View>
      {borderBottomWidth}
      {errorMessage ? (
        <Text style={textInputStyle.error}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    color: colors.black,
    marginRight: '9%',
  },
  inputAndroid: {
    fontSize: 15,
    marginRight: '9%',
    color: colors.black,
    textAlign: 'left',
  },
  inputAndroidContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputIOSContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    height: 30,
    // width: Dimensions.get('window').width / 1.7,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  chevron: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    width: 0,
    height: 0,
  },
});
export default ModalDropdownComponent;
