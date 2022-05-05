import {Platform, StyleSheet} from 'react-native';
import constant from '../../constants/constant';
import colors from '../../constants/colors';
const stylesRegisterCompete03 = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  eachContainer: {flex: 1, flexDirection: 'column'},
  flex90: {flex: 90},
  viewTitle: {flex: 10, justifyContent: 'center', marginHorizontal: 10},
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 30,
  },
  viewInput1: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 7,
    height: 45,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  touchableOpacity1: {justifyContent: 'center', alignItems: 'center'},
  iconInput1: {width: 20, height: 20, alignSelf: 'center'},
  viewContainerRow: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewBorderInputRow: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 20,
    height: 45,
  },
  textTitleRow: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 10,
  },
  viewInputComment: {
    borderRadius: 10,
    borderWidth: 1,
    height: 80,
    marginTop: 7,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  viewContainerRow2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainerRow3: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputPrice: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    height: 40,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonNext: {
    marginBottom: 25,
    borderRadius: 5,
    backgroundColor: 'grey',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 150,
  },
});
export default stylesRegisterCompete03;
