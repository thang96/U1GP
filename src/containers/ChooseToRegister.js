import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import stylesChooseRegister from '../resource/styles/chooseRegisterStyle';
import ImageTop from '../resource/icon/background-icon-page.svg';
import ButtonCustomComponent from "../components/ButtonCustomComponent";
import constant from "../constants/constant";
import colors from '../constants/colors';
import {navigateAction} from "../actions/navigationActions";
import {useDispatch} from "react-redux";
import makePostRequest from '../repositories/api/userId';
function ChooseToRegister(props) {
  const {navigation, route} = props;
  const {navigate, goback} = navigation;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={stylesChooseRegister.container}>
      <View style={[stylesChooseRegister.viewcontainer]}>
        <View style={{paddingTop: 20}}>
          <ImageTop width={constant.WIDTH} height={constant.WIDTH - 40}/>
          <Text style={stylesChooseRegister.textDetai}>詳細内容</Text>
        </View>
        <View style={{width: '100%', paddingHorizontal: 30, flex: 0.7, justifyContent: 'center'}}>
          <ButtonCustomComponent
            label={'愛車で参戦する'}
            customStyle={{ backgroundColor: '#E65050', borderWidth: 1, borderColor: colors.borderColor}}
            customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 20}}
            onPress={()=>{
              makePostRequest().then(res => {
                console.log('kequa' , res, res?.have_user , typeof(res?.have_user), res?.have_user ==1);
                if(res?.have_user !== 0){
                  if(res?.have_vehicle == 0 ){
                    navigate('RegisterToCompete01');
                  } else if(res?.have_vehicle != 0){
                    navigate('U1GPTop01');
                  }
                }
              }).catch(error => {
                console.log(error)
              })
            }}
          />
          <ButtonCustomComponent
            label={'投票で参戦する'}
            customStyle={{ backgroundColor: '#509BE6', marginTop: 20,  borderWidth: 1, borderColor: colors.borderColor}}
            customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 20}}
            onPress={() => {
              dispatch(navigateAction({name: 'U1GPTop01'}));
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default ChooseToRegister
