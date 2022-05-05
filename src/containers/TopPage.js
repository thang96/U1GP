import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet, 
  Platform,
  LogBox 
} from 'react-native';
import {icons,images} from '../constants';
import colors from '../constants/colors';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import makePostRequest from '../repositories/api/userId'
import deviceInfoModule from 'react-native-device-info';
import getDataTopTag from '../repositories/api/getTopTag';

const udid = deviceInfoModule.getUniqueId()

function TopPage(props) {
LogBox.ignoreLogs([
  'Require cycle:'
])
  // const uniqueId = DeviceInfo.getUniqueId();
  const objectEvent = [
    {
      name: 'オフィシャル実況',
      img: images.news,
    },
    {
      name: 'U1GPに参加',
      img: images.bgu1,
    },
    {
      name: 'イベント／コミュニティー',
      img: images.event,
    },
  ];

  const navigation = useNavigation()
  const [item, setItem] = useState(objectEvent);

const onNavigate = async () => {
  try {
    const responseData = await makePostRequest()
    
    if(Number(responseData?.have_user) > 0 && Number(responseData?.have_vehicle) > 0) {
      navigation.navigate("U1GPTop01")
    } else if(Number(responseData?.have_user) > 0) {
      navigation.navigate("ChooseToRegister")
    }
      else {
    navigation.navigate("RegisterToVote01")
  }
  } catch (error) {
  }
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("RegisterToVote01")
          }}
            style={{paddingHorizontal: 10, marginTop: 20}}>
            <Text style={styles.titlePage}>{item[0].name}</Text>
            <Image
              resizeMode="contain"
              style={{height: 200, width: '100%'}}
              source={item[0].img}
            />
          </TouchableOpacity>
          <TouchableOpacity

            onPress={onNavigate}
            style={{paddingHorizontal: 10, marginTop: 10}}>
            <Text style={styles.titlePage}>{item[1].name}</Text>
            <Image
              resizeMode="contain"
              style={{height: 200, width: '100%'}}
              source={item[1].img}
            />
          </TouchableOpacity>
          <TouchableOpacity
          
            style={{paddingHorizontal: 10, marginTop: 10}}>
            <Text style={styles.titlePage}>{item[2].name}</Text>
            <Image
              resizeMode="contain"
              style={{width: '100%'}}
              source={item[2].img}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titlePage: {
    fontSize: Platform.OS === 'ios' ? 24 : 16,
    fontWeight: 'bold',
    color: colors.colorPageText,
    fontFamily: 'meiryo',
  },
});

export default TopPage;
