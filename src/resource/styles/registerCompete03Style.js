import {Platform, StyleSheet} from 'react-native';
import constant from '../../constants/constant';
import colors from '../../constants/colors';
const stylesRegisterCompete03 = StyleSheet.create({
   container:{flex: 100 , backgroundColor:"white"},
   eachContainer:{flex: 100, 
    flexDirection: 'column'},
    flex90:{flex: 90},
    viewTitle:{marginHorizontal: 10,},
    textTitle:{fontWeight: 'bold',fontSize: 18,alignSelf: 'center',marginTop:30,color:'black'},
    textInput1:{flexDirection: 'row',borderRadius: 10,borderWidth: 1,marginTop: 7,paddingHorizontal: 20,color:'black'},
    touchableOpacity1:{justifyContent:'center',alignItems:'center'},
    iconInput1:{width:20,height:20,alignSelf:'center'},
    viewContainerRow:{ flexDirection: 'row',marginTop: 20, alignItems: 'center',justifyContent: 'flex-start'},
    viewBorderInputRow:{borderWidth: 1,borderRadius: 10,flex: 1,paddingHorizontal: 20,},
    textTitleRow:{fontSize: 18, fontWeight: 'bold', marginLeft: 5,marginRight: 10,},
    viewInputComment:{borderRadius: 10,borderWidth: 1,height: 100,marginTop: 7, paddingHorizontal: 20,color:'black'},
    viewContainerRow2:{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 10,alignItems: 'center', justifyContent: 'center',},
    viewContainerRow3:{flexDirection: 'row',paddingHorizontal: 20, marginTop: 10,alignItems: 'center',justifyContent: 'center',},
    textInputPrice:{flexDirection: 'row',alignSelf: 'center',position: 'absolute',height: 40, width: 150,borderRadius: 10, borderWidth: 1,},
    buttonNext:{marginBottom: 25, borderRadius: 5,backgroundColor: 'grey',height: 40,justifyContent: 'center', alignSelf: 'center', alignItems: 'center',  width: 150,}
})
export default stylesRegisterCompete03