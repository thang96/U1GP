import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

function RegisterToVote02(props) {
  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShow(false);
    });
  });
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flexDirection: 'column', flex: 1, zIndex: 9, elevation: 1}}>
        {keyboardIsShow==false&&<Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            marginVertical: 20,
            alignSelf:'center'
          }}>
          興味のあるタグを複数登録できます
        </Text>}
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>TZR250</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>YAMAHA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>K2TECH</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 15, marginTop: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>2スト</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>レーサーレプリア</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 2, backgroundColor: 'grey', margin: 10}} />
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>HONDA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              KAWASAKI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              チャンパー
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              アッパーカウル
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              セパハン
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 25, flexDirection: 'row',borderWidth: 1, borderRadius: 5,height:50,width:'50%'}}>
          <TextInput placeholderTextColor={'grey'} placeholder='    タグ' style={{width:'65%',color:'black'}}></TextInput>
          <TouchableOpacity style={{width:'30%',backgroundColor:'grey',borderRadius: 5,margin:5,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>追加</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
        <TouchableOpacity
          onPress={() => {navigation.navigate('ChooseToRegister')}}
          style={{
            marginVertical: 25,
            borderRadius: 5,
            backgroundColor: 'grey',
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            width: 150,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
            次へ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default RegisterToVote02;
