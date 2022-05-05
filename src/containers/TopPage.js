import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {icons,images} from '../constants';

function TopPage(props) {
  const objectEvent = [
    {
      name: 'オフィシャル実況',
      img: images.news,
    },
    {
      name: 'U1GPに参加',
      img: images.u1gpJoin,
    },
    {
      name: '#イベント／コミュにティー',
      img: images.event,
    },
  ];
  const [item, setItem] = useState(objectEvent);
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            <TouchableOpacity
              style={{paddingHorizontal: 10, marginTop: 20}}>
              <Text style={{fontSize: 20,fontWeight:'bold',color:'black'}}>{item[0].name}</Text>
              <Image
                resizeMode="cover"
                style={{height: 200, width: '100%'}}
                source={item[0].img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterToVote01');
              }}
              style={{paddingHorizontal: 10, marginTop: 20}}>
              <Text style={{fontSize: 20,fontWeight:'bold',color:'black'}}>{item[1].name}</Text>
              <Image
                resizeMode="cover"
                style={{height: 200, width: '100%'}}
                source={item[1].img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterToVote01');
              }}
              style={{paddingHorizontal: 10, marginTop: 20}}>
              <Text style={{fontSize: 20,fontWeight:'bold',color:'black'}}>{item[2].name}</Text>
              <Image
                resizeMode="cover"
                style={{height: 200, width: '100%'}}
                source={item[2].img}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
export default TopPage;
