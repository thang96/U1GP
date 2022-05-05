import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import {icons, images} from '../../constants';
import stylesRegisterCompete03 from '../../resource/styles/registerCompete03Style';
import {useNavigation} from '@react-navigation/native';

function RegisterToCompete03(props) {
  const [selected, setSelected] = useState(null);

  const [isShow, setIsShow] = useState(false);
  const onChangeIsShow = newValue => {
    return () => {
      setIsShow(newValue);
    };
  };
  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShow(false);
    });
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesRegisterCompete03.container}>
      <View style={stylesRegisterCompete03.eachContainer}>
        <View style={stylesRegisterCompete03.flex90}>
          <ScrollView style={stylesRegisterCompete03.flex90}>
            <View style={stylesRegisterCompete03.viewTitle}>
              {keyboardIsShow == false && (
                <Text style={stylesRegisterCompete03.textTitle}>
                  参戦するバイクのことを教えてください
                </Text>
              )}

              <Text style={{marginTop: 30, marginStart: 10, color: 'black'}}>
                エントリー部門
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 7,
                  height: 40,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    borderRadius: 10,
                    borderWidth: 1,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <Text style={{flex: 1,height:40}}></Text>
                  <Image
                    style={{height: 25, width: 25}}
                    source={icons.sortDow}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={icons.question}
                    style={{
                      height: 40,
                      width: 40,
                      marginHorizontal: 5,
                      marginLeft:5
                    }}
                  />
                </TouchableOpacity>
              </View>
              
              <View>
              <Text style={{marginTop: 30, marginStart: 10, color: 'black'}}>
                マシン名
              </Text>
                <TextInput
                  style={stylesRegisterCompete03.textInput1}
                  placeholderTextColor={'grey'}
                  placeholder="マシン名"
                />
              </View>

              <View>
              <Text style={{marginTop: 30, marginStart: 10, color: 'black'}}>
                  アピールポイント
                </Text>
                <TextInput
                style={stylesRegisterCompete03.viewInputComment}
                  placeholderTextColor={'grey'}
                  placeholder="アピールポイント"
                />
              </View>
                
              <View>
              <Text style={{marginTop: 30, marginStart: 11, color: 'black'}}>
                  カスタム説明／概算総費用
                </Text>
                <TextInput
                style={stylesRegisterCompete03.viewInputComment}
                  placeholderTextColor={'grey'}
                  placeholder="カスタム説明／概算総費用"
                />
              </View>
            </View>
            <View>
              <Text style={{marginTop: 30, marginStart: 14}}>
                エントリー部門
              </Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RegisterToCompete04');
                }}
                style={stylesRegisterCompete03.buttonNext}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
                  次へ
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete03;
