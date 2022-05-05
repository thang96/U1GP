import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import splashStyle from '../resource/styles/splashStyle';
import {icons, images} from '../constants';
function Splash(props) {
  return (
    <SafeAreaView style={splashStyle.container}>
      <View style={splashStyle.viewContainer}>
        <Image
          resizeMode="contain"
          source={icons.logoSuzuka}
          style={splashStyle.imageLogo}
        />
      </View>
    </SafeAreaView>
  );
}
export default Splash;
