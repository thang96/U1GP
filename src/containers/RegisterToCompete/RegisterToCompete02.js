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

function RegisterToCompete02(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesRegisterCompete.container}>
      <View style={stylesRegisterCompete.eachContainer}>
        <View style={{flexDirection: 'column'}} />
        <View style={{flex: 80}}>
          <ScrollView style={{flex: 80}}>
            <View style={{flex: 10, justifyContent: 'center'}}>
              <Text style={stylesRegisterCompete.textTitle}>
                参戦するバイクのことを教えてください
              </Text>
            </View>
            <View style={{flexDirection:'column'}}>
              <View>
                <Image
                  resizeMode="contain"
                  style={stylesRegisterCompete.imageMain}
                  source={images.bykeImage}
                />
              </View>
              <ScrollView horizontal>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images.bykeImage}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images.bykeImage}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images.bykeImage}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images.bykeImage}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
              </ScrollView>
              <ScrollView horizontal>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images.bykeImage}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images.bykeImage}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View>
                  <Image
                    resizeMode="cover"
                    source={images}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1}} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterToCompete03');
          }}
          style={stylesRegisterCompete.buttonNext}>
          <Text style={stylesRegisterCompete.textButtonNext}>次へ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete02;
