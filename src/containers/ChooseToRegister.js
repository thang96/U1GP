import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../constants';
import stylesChooseRegister from '../resource/styles/chooseRegisterStyle'
function ChooseToRegister(props) {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={stylesChooseRegister.container}>
      <View style={stylesChooseRegister.viewcontainer}>
        <Image style={stylesChooseRegister.imageLogo} source={icons.dialogSuzuka} />
        <Text style={stylesChooseRegister.textDetai}>詳細内容</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterToCompete01');
          }}>
          <View style={stylesChooseRegister.touchable1}>
            <Text style={stylesChooseRegister.textButton}>愛車で参戦する</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
       >
          <View style={stylesChooseRegister.touchable2}>
            <Text style={stylesChooseRegister.textButton}>投票で参戦する</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default ChooseToRegister
