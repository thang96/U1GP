import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import stylesRegisterCompete02 from '../resource/styles/registerCompete02Style';
import colors from '../constants/colors';
import ProgressiveImage from '../components/ProgressiveImage';
import ButtonCustomComponent from '../components/ButtonCustomComponent';
import constant from '../constants/constant';
import {navigateAction} from "../actions/navigationActions";
import {useDispatch} from "react-redux";
import IconCameraChildren from "../resource/icon/icon-camera-children.svg";

function RegisterToCompete02({route}) {
  const {albumImage} = route?.params;
  const dispatch = useDispatch();

  const checkImageInList = (key) => {
    const newAlbum = {...albumImage};
    const isImgActive = Object.values(newAlbum).find(value => value.key === key);
    console.log(isImgActive, 'isImgActive');
    return [!isImgActive?.img, isImgActive?.img?.uri];
  };

  const checkShowImage = (key) => {
    const newAlbum = {...albumImage};
    let imageActive =  Object.values(newAlbum).find(value => value.imgActive === true);
    console.log(imageActive, 'imageActive');

    return [imageActive?.img?.uri, imageActive?.img?.uri]
  };

  const renderAddImage = (key) => {
    return (
      <View
        style={{ width: constant.WIDTH / 3, height: constant.WIDTH / 4, alignItems: 'center', justifyContent: 'center'}}>
        {checkImageInList(key)[0] ? (
          <IconCameraChildren width={40} height={40} />
        ) : (
          <ProgressiveImage
            thumbnailStyle={{width: '100%', height: '100%'}}
            source={{uri: albumImage[key]?.img?.uri}}
            containerStyle={{width: '100%', height: '100%'}}
          />
        )}
      </View>
    )
  };

  return (
    <SafeAreaView style={stylesRegisterCompete02.container}>
      <View
        style={{alignItems: 'center', flex: 1, backgroundColor: colors.white}}
      >
        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 19 : 14,
              fontWeight: 'bold',
              color: colors.colorPageText,
            }}
          >
            参戦するバイクのことを教えてください
          </Text>
        </View>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: constant.HEIGHT > 700 ? constant.HEIGHT / 3 : constant.HEIGHT / 3.5,
            }}
          >
            {
              checkShowImage()[0] ? (
                <ProgressiveImage
                  thumbnailStyle={styles.whPercent100}
                  source={{uri: checkShowImage()[1]}}
                  containerStyle={styles.whPercent100}
                />
              ) : (
                <Text style={{fontSize: Platform.OS === 'ios' ? 19 : 16, fontFamily: 'meiryo', color: colors.colorPageText}}>メイン写真</Text>
              )
            }
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            { renderAddImage('imageOne')}
            { renderAddImage('imageTwo')}
            { renderAddImage('imageThree')}
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            { renderAddImage('imageFour')}
            { renderAddImage('imageFive')}
            { renderAddImage('imageSix')}
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingBottom: 10,
            backgroundColor: colors.white,
          }}
        >
          <ButtonCustomComponent
            label={'次へ'}
            customStyle={{
              backgroundColor: colors.btnNext,
              width: constant.WIDTH / 3,
              alignSelf: 'center',
            }}
            customStyleText={{
              fontSize: constant.HEIGHT > 700 ? 24 : 14,
              paddingVertical: Platform.OS === 'ios' ? 5 : 0,
            }}
            onPress={() => {
              dispatch(navigateAction({name: 'RegisterToCompete03'}));
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  whPercent100: {
    width: '100%',
    height: '100%',
  },
});

export default RegisterToCompete02;
