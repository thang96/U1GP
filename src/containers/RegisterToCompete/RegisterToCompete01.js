import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {icons, images} from '../../constants';
import stylesRegisterCompete from '../../resource/styles/registerCompete01Style';

function RegisterToCompete01(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesRegisterCompete.container}>
      <View style={stylesRegisterCompete.eachContainer}>
        <View style={{flexDirection: 'column'}} />
        <View style={{flex: 80}}>
          <View style={{flex: 80}}>
            <View style={{ justifyContent: 'center'}}>
              <Text style={stylesRegisterCompete.textTitle}>
                参戦するバイクのことを教えてください
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>
                <Image
                  resizeMode="contain"
                  style={stylesRegisterCompete.imageMain}
                  source={icons.cameraMain}
                />
              </TouchableOpacity>
              <ScrollView horizontal>
              <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      color:'black'
                    }}>
                    右
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      color:'black'
                    }}>
                    左
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      color:'black'
                    }}>
                    前
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      color:'black'
                    }}>
                    後
                  </Text>
                </TouchableOpacity>
              </ScrollView>
              <ScrollView horizontal>
              <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}
                style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}
                style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}
                style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}
                style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </TouchableOpacity>
                
              </ScrollView>
              <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterToCompete02');
          }}
          style={stylesRegisterCompete.buttonNext}>
          <Text style={stylesRegisterCompete.textButtonNext}>次へ</Text>
        </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete01;
