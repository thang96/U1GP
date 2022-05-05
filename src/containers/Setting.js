import {
    NavigationContainer,
    useNavigation,
    useRoute,
  } from '@react-navigation/native';
  import React, {useState, useEffect} from 'react';
  import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
  } from 'react-native';
  import colors from '../constants/colors';
  import constant from '../constants/constant';
  import {navigateAction} from '../actions/navigationActions';
  import ButtonCustomComponent from '../components/ButtonCustomComponent';
  import {useDispatch} from 'react-redux';
  import {icons, images} from '../constants';
  function Setting(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.eachContainer}>
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={styles.textStyle}>アカウント情報</Text>
            <Image source={icons.next} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={styles.textStyle}>コメント履歴</Text>
            <Image source={icons.next} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={styles.textStyle}>通知履歴</Text>
            <Image source={icons.next} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={styles.textStyle}>事務局へ問い合わせ</Text>
            <Image source={icons.next} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={styles.textStyle}>機種変更</Text>
            <Image source={icons.next} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
  
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: colors.colorTextTitle}}>Ver 1.0.0</Text>
          <Text style={{color: colors.colorTextTitle}}>ユニークIDを表示</Text>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'rgb(255,255,255)'},
    eachContainer: {flex: 1, flexDirection: 'column', paddingTop: 15},
    touchStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 60,
      borderBottomWidth: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    textStyle: {fontSize: 18, color: colors.colorPageText},
    imageStyle: {width: 25, height: 25},
  });
  export default Setting;
  