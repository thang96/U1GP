import {useNavigation} from '@react-navigation/native';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../constants/colors';
import TextInputCustomComponent from '../../components/TextInputCustomComponent';
import ModalDropdownComponent from '../../components/ModalDropdownComponent';
import commonStyle from '../../resource/styles/commonStyles';
import constant from '../../constants/constant';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import common from '../../utils/common';
import { getMyVehicle } from '../../repositories/api/detailbike';

function HistoryVote(props) {
  const [listVehicle, setListVehicle] = useState([]);
  useEffect(() => {
    // setLoad(true);
    getMyVehicle()
      .then((res) => {
        let value = res?.data && res.data ? res.data : [];
        setListVehicle(value);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);
  const dispatch = useDispatch();
  const LISTBYKE = [
    {
      images: images.bykeImage,
      nameUse: 'YAMADA',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA2',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA3',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA4',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA5',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA6',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA7',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA8',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA9',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
    {
      images: images.bykeImage,
      nameUse: 'YAMADA10',
      allRanking: '1062位/1432台中',
      bumonRanking: '112位/134台中',
    },
  ];
  const [listByke, setListByke] = useState(LISTBYKE);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            dispatch(navigateAction({name: 'MyProfile'}));
          }}
          style={styles.touchContainer}>
          <View style={styles.eachContainer1}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
            resizeMode="contain"
            style={{width: 70, height: 70, borderRadius: 60, marginEnd: 15}}
            source={{
              uri:
                'http://210.245.51.29:8000/api/v1/basic/public/images/'+listVehicle?.user_information?.photo_0
            }}
          />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.nameUser}>{listVehicle?.user_information?.nickname??''}</Text>
                <Text style={styles.nameByke}>{listVehicle?.vehicle_name??''}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{width: 40, height: 40,marginRight:10}}
                  source={icons.specialLike}
                />
                <Text style={{fontFamily: 'meiryo', marginHorizontal: 5}}>
                  {listVehicle?.like_number??0}
                </Text>
              </View>
              <Text style={styles.voteState}>本戦</Text>
            </View>
          </View>
          <View style={styles.eachContainer2}>
            <View
              style={styles.viewRowChild}>
              <View>
                <Text
                  style={styles.textRowChild}>
                  総合ランキング
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                {/* <Text
                  style={styles.textRowChild}>
                  1062位
                </Text>
                <Text
                  style={styles.textRowChild}>
                  /
                </Text> */}
                <Text
                  style={styles.textRowChild}>
                  {listVehicle?.total_rank??''}
                </Text>
              </View>
            </View>
            <View
              style={styles.viewRowChild}>
              <View>
                <Text
                  style={styles.textRowChild}>
                  ハーレー部門
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                {/* <Text
                  style={styles.textRowChild}>
                  112位
                </Text>
                <Text
                  style={styles.textRowChild}>
                  /
                </Text> */}
                <Text
                  style={styles.textRowChild}>
                  {listVehicle?.rank_by_vehicle??''}
                </Text>
              </View>
            </View>
          </View>
          <View style={{height: '1%', backgroundColor: colors.colorPageText}} />
        </TouchableOpacity>

        <View style={{flex: 70, backgroundColor: 'white'}}>
          <FlatList
            data={listByke}
            keyExtractor={item => item.nameUse}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  height: 80,
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <Image source={item.images} style={{width: 130, height: 80}} />
                <View
                  style={{
                    flexDirection: 'column',
                    flex: 1,
                    paddingHorizontal: 5,
                    justifyContent: 'center',
                  }}>
                  <Text>{item.nameUse}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>総合ランキング</Text>
                    <Text>{item.allRanking}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>00部門</Text>
                    <Text>{item.bumonRanking}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(navigateAction({name: 'U1GPTop01'}));
        }}
        style={styles.buttonRegister}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>投票権</Text>
        <View style={{flexDirection:'row',alignContent:'flex-end'}}>
            <Text style={{color:'white',marginTop:7,fontSize:12}}>残り</Text>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{listVehicle?.like_bumber}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 100},
  touchContainer: {flex: 30, flexDirection: 'column', backgroundColor: 'white'},
  eachContainer1: {
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  imageUser: {width: 70, height: 70, borderRadius: 60, marginEnd: 15},
  nameUser: {
    color: colors.colorPageText,
    fontSize: 20,
    fontFamily: 'meiryo',
    fontWeight: 'bold',
  },
  nameByke: {
    color: colors.colorPageText,
    fontSize: 14,
    fontFamily: 'meiryo',
    fontWeight: 'normal',
  },
  voteState: {
    fontFamily: 'meiryo',
    fontSize: 16,
    color: 'rgb(255,78,0)',
    fontWeight: 'bold',
  },
  eachContainer2: {
    flexDirection: 'column',
    height: '49%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  viewRowChild:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',},
  textRowChild:{color: colors.colorPageText,
    fontSize: 20,
    fontFamily: 'meiryo',
    fontWeight: 'normal',},
  buttonRegister:{position: 'absolute',
    bottom: 10,
    right: 10,
    width: 100,
    height: 100,
    borderRadius: 80,
    backgroundColor: 'rgb(255,147,0)',
    justifyContent: 'center',
    alignItems: 'center',}
});
export default HistoryVote;
