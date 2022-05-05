import {Platform, StyleSheet} from 'react-native';
import constant from '../../constants/constant';
import colors from '../../constants/colors';
const stylesChooseRegister = StyleSheet.create({
    container: {flex: 1, backgroundColor: colors.white},
  viewcontainer: {flex: 1, alignItems: 'center'},
  viewTouchBar: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetai: {alignSelf: 'center', margin: 20},
  imageViewTouchBar: {
    height: 56,
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
  },
  imageLogo: {alignSelf: 'center', marginTop: 20, height: 330, width: 330},
  touchable1: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 60,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  touchable2: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 60,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#1E90FF',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 10,
  },
})
export default stylesChooseRegister
