import {Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

const constant = {
  INDENT: 15,
  HEADER_HEIGHT: StatusBar.currentHeight,
  WIDTH: width,
  HEIGHT: height,
  NUMBER_PHONE_AUTH: '+17579965510',
};

export default constant;
