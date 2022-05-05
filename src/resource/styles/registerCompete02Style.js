import {Platform, StyleSheet} from 'react-native';
import constant from '../../constants/constant';
import colors from '../../constants/colors';
const stylesRegisterCompete02 = StyleSheet.create({
    container: {flex: 100},
    eachContainer: {flex: 100, flexDirection: 'column'},
    viewTabBar: {
      flexDirection: 'row',
      height: 56,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    imageTabBar: {
      height: 56,
      width: 200,
      alignSelf: 'center',
      position: 'absolute',
    },
    textTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      alignSelf: 'center',
      marginVertical: 15,
    },
    imageMain: {
      alignSelf: 'center',
      backgroundColor: 'red',
      height: 240,
      marginTop: 20,
    },
    smallImage: {width: 120, height: 100},
    
    buttonNext: {
      marginVertical: 25,
      borderRadius: 5,
      backgroundColor: 'grey',
      height: 40,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      width: 150,
    },
    textButtonNext: {color: 'white', fontWeight: 'bold', fontSize: 24},
})
export default stylesRegisterCompete02