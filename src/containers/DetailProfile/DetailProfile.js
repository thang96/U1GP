import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';
import {icons, images} from '../../constants';
import colors from '../../constants/colors';
import {getMyVehicle} from '../../repositories/api/detailbike';
import axios from 'axios';

function DetailProfile(props) {
  const route = useRoute();
  console.log("-----------------------",route,"\n");
  const [load, setLoad] = useState(false);
  const [listVehicle, setListVehicle] = useState([]);
  useEffect(() => {
    setLoad(true);
    axios({
      method: 'post',
      url: 'http://210.245.51.29:8000/api/v1/vehicleinfor/showbyid',
      data: {vehicle_id: route.params},
    })
      .then(res => {
        let value = res?.data?.data && res.data?.data ? res.data?.data : [];
        setListVehicle(value);
      })
      .catch(e => {})
      .finally(() => {
        setLoad(false);
      });
  }, []);
  useEffect(() => {
    const photo1 = listVehicle.photo_1 ?? '';
    const photo2 = listVehicle.photo_2 ?? '';
    const photo3 = listVehicle.photo_3 ?? '';
    const photo4 = listVehicle.photo_4 ?? '';
    const photo5 = listVehicle.photo_5 ?? '';
    const photo6 = listVehicle.photo_6 ?? '';
    const PHOTO = [photo1, photo2, photo3, photo4, photo5, photo6];
    const userImage = listVehicle.user_information?.photo_0 ?? '';
    const nickName = listVehicle.user_information?.nickName ?? '';
    console.log('\n ------------------ \n \n', listVehicle.user_information?.photo_0,'\n ----- showwwwww')
    setPhoto(PHOTO);
  }, [listVehicle]);


  const [photo, setPhoto] = useState([]);
  const [indexSelected, setIndexSelected] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          marginVertical: 5,
          backgroundColor: 'rgb(255,255,255)',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{width: 70, height: 70, borderRadius: 60, marginEnd: 15}}
            source={{
              uri:
                'http://210.245.51.29:8000/api/v1/basic/public/images/'+listVehicle.user_information?.photo_0
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: colors.colorPageText,
                fontSize: 20,
                fontFamily: 'meiryo',
                fontWeight: 'bold',
              }}>
              {listVehicle?.user_information?.nickname??''}
            </Text>
            <Text
              style={{
                color: colors.colorPageText,
                fontSize: 14,
                fontFamily: 'meiryo',
                fontWeight: 'normal',
              }}>
              {listVehicle.vehicle_name??''}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 35, height: 35, marginRight: 10}}
              source={icons.like}
            />
            <Text style={{fontFamily: 'meiryo', marginHorizontal: 5}}>
              {listVehicle?.like_number ?? 0}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'meiryo',
              fontSize: 16,
              color: colors.colorPageText,
              fontWeight: 'bold',
            }}>
            予選
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'rgb(255,255,255)',
          position: 'relative',
        }}>
        <View>
          <View>
            {console.log(listVehicle?.photo_1)}
            <Image
              resizeMode="contain"
              style={{alignSelf: 'center', height: 220, width: '100%'}}
              source={{
                uri:
                  'http://210.245.51.29:8000/api/v1/basic/public/images/'+photo[indexSelected]
              }}
            />
          </View>

          <View>
            <FlatList
              numColumns={3}
              data={photo}
              keyExtractor={(item, index) => Math.random() + index}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{flex: 1}}
                  key={Math.random() + index}
                  onPress={() => {
                    setIndexSelected(index);
                  }}>
                  <Image
                    key={Math.random() + index}
                    resizeMode="cover"
                    style={{
                      alignSelf: 'center',
                      height: 100,
                      width: '100%',
                    }}
                    source={{
                      uri:
                        'http://210.245.51.29:8000/api/v1/basic/public/images/' +
                        item,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
         
        </View>
        <View style={{padding: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            {listVehicle?.register_time ?? ''}
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={{fontSize: 18}}>総合ランキング</Text>
            <View style={{flex: 0.7}} />
            <Text style={{fontSize: 18}}>
              {listVehicle?.total_rank ?? '0/0'}
            </Text>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={{fontSize: 18}}>ハーレー部門</Text>
            <View style={{flex: 0.9}} />
            <Text style={{fontSize: 18}}>
              {listVehicle?.rank_by_vehicle ?? '0/0'}
            </Text>
          </View>
        </View>
        <View style={{height: 3, backgroundColor: 'grey', margin: 10}} />
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <Text style={{}}>
            ナイトロンのリアサスがお気に入りです。その他、イ
            ージーライダースのリアフェンダー（本当は交換した
            い。マフラーはブラスです。
            ノーマルのフロントブレーキマスターを持っていきま
            す。もし欲しい人がいれば、お気軽に声をかけてくだ
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'none',
          bottom: 0,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            height: 42,
            width: 100,
            borderRadius: 4,
            backgroundColor: 'rgb(255,127,33)',
          }}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            投票する
          </Text>
          <Text style={{
              color: 'white',
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 9,
              fontWeight: 'bold',
              marginTop:13
            }}>
            (残り5)
          </Text>
            </View>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            height: 42,
            marginStart: 20,
            width: 100,
            borderRadius: 4,
            backgroundColor: 'rgb(28,168,255)',
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            コメント
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default DetailProfile;
