import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useCallback, useEffect} from 'react';
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
  LogBox,
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
import information from '../../constants/information';
import {Dimensions} from 'react-native';
import {getMyVehicle} from '../../repositories/api/detailbike';

function UserProfile(props) {
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const [fakeAPi, setApi] = useState({});
  console.log('--------------', fakeAPi, '------------------------');

  useEffect(() => {
    getMyVehicle().then(res => {
      console.log(res.data, 'reeeee');
      setApi(res.data);
    });
  }, []);
  const FAKEDATAUSER = [
    {
      bike_1: 'XL1200X 48',
      bike_2: 'シグナスX,jazz,XV250ビラーゴ',
      bike_3: 'kawasaki Ninja250',
    },
  ];
  const FAKEDATA = [
    {
      post_1:
        '広島から来た32才男です!ツーリングは年に10回くらい、しまなみ街道から四国のルートが多いです。',
      post_2:
        '昨年からソロキャンにハマってます。スノーピークが好 きです。とくにコットはいつも持っていきます。その他、オーストラリアのお店のアルストも気に入って ます。',
    },
  ];
  const FAKEDATAUSERPROFILE = [
    {
      name: '20年以上',
      age: `${fakeAPi?.age}歳`,
      status: '男',
      titile: '大阪府在住',
    },
  ];
  const [tagApi, setTagApi] = useState([]);

  //  let responseData = ( fakeAPi?.user_information?.tag || [])
  // //  .map((tag)=> ({
  // //       name: tag,
  // //       focus: false,
  // //     }));

  // console.log(responseData ,"responseData");
  const SELECTTAG = [
    {name: fakeAPi?.user_information?.tag, focus: true},
    // {name: 'スクーター', focus: true},
  ];
  const FAKEDATAEVENT = [
    {
      img: images.event1,
      title: '★NSR乗り限定!★HONDAブース で集合しませんか?!',
      like: 272,
      blog: '関西に引っ越してきたばかりで、友人がいませんバイクが趣味なのでよければ、日帰り近場で。。。',
      time: '03/12',
      smailBoLog: '三重県鈴鹿市',
    },
    {
      img: images.event2,
      title: '★中須賀選手ファン限定!★YAMAHAブース集合!!',
      like: 270,
      blog: '関西に引っ越してきたばかりで、友人がいません！バイクが趣味なのでよければ、日帰り近場で。。。',
      time: '03/12',
      smailBoLog: '三重県鈴鹿市',
    },
  ];
  const [useName, setUse] = useState(FAKEDATAUSER);
  const [datablog, setDataBolog] = useState(FAKEDATA);
  const [dataUserPro, setUserPro] = useState(FAKEDATAUSERPROFILE);
  const [tag, setSelectTags] = useState(SELECTTAG);
  const [event, setEvent] = useState(FAKEDATAEVENT);
  const CHOOSE = [];
  const [choose, setChoose] = useState(CHOOSE);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(255,255,255)'}}>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
              borderRadius: 60,
              marginEnd: 15,
              padding: 20,
            }}
            source={{
              uri:
                'http://210.245.51.29:8000/api/v1/basic/public/images/' +
                fakeAPi?.user_information?.photo_0,
            }}
          />
          <Text
            style={{
              color: 'rgb(95,95,95)',
              fontSize: 20,
              fontFamily: 'meiryo',
              fontWeight: 'bold',
            }}>
            {fakeAPi?.user_information?.nickname}
          </Text>
          <View style={{flex: 1}} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyProfile');
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 70,
                height: 70,
                borderRadius: 60,
                marginEnd: 15,
                padding: 20,
              }}
              source={{
                uri:
                  'http://210.245.51.29:8000/api/v1/basic/public/images/' +
                  fakeAPi?.photo_1,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{borderColor: 'rgb(95,95,95)', borderWidth: 1, marginTop: 10}}
      />
      <ScrollView>
        <View>
          <FlatList
            data={useName}
            keyExtractor={item => item}
            renderItem={({item, index}) => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'rgb(95,95,95)'}}>現愛車 : </Text>
                  <Text>{fakeAPi?.vehicle_name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'rgb(95,95,95))'}}>歴代車種 : </Text>
                  <Text>シグナスX,jazz,XV250ビラーゴ</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'rgb(95,95,95)'}}>欲しい車種 : </Text>
                  <Text>{fakeAPi?.user_information?.bike_ownership_want}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <FlatList
          data={FAKEDATA}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <View>
              <View
                style={{
                  flexDirection: 'column',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'rgb(95,95,95)',
                    fontSize: 16,
                  }}>
                  ツーリングエリア
                </Text>
                <View
                  style={{
                    borderColor: 'rgb(95,95,95)',
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />
                <Text style={{marginTop: 12, color: 'rgb(95,95,95)'}}>
                  {fakeAPi?.user_information?.bike_touring_area}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'rgb(95,95,95)',
                    fontSize: 16,
                  }}>
                  趣味（ライフスタイル）
                </Text>
                <View
                  style={{
                    borderColor: '#707070',
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />
                <Text style={{marginTop: 12, color: 'rgb(95,95,95)'}}>
                  {fakeAPi?.user_information?.bike_gear}
                </Text>
              </View>
            </View>
          )}
        />
        <View>
          <FlatList
            data={dataUserPro}
            keyExtractor={item => item}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginTop: 15,
                }}>
                <Text style={{color: 'rgb(95,95,95)'}}>免許歴 : </Text>
                <Text style={{color: 'rgb(95,95,95)'}}>
                  {fakeAPi?.user_information?.license_history}
                </Text>
                <Text style={{color: 'rgb(95,95,95)', marginStart: 15}}>
                  {fakeAPi?.user_information?.age}
                </Text>
                <Text style={{color: 'rgb(95,95,95)', marginStart: 15}}>
                  {fakeAPi?.user_information?.sex}
                </Text>
                <Text style={{color: 'rgb(95,95,95)', marginStart: 15}}>
                  {fakeAPi?.user_information?.region}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: '#707070', height: 1, margin: 15}} />
        <View style={{marginTop: 10, marginStart: 10}}>
          <FlatList
            data={tag}
            numColumns={3}
            keyExtractor={eachSelectTag => eachSelectTag.name}
            renderItem={({item, index}) => (
              <View
                onPress={() => {}}
                style={{
                  backgroundColor:
                    item.focus == false || item.focus == undefined
                      ? 'white'
                      : 'rgb(143,191,11)',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  marginLeft: 10,
                  height: 40,
                  marginBottom: 10,
                  borderColor: 'rgb(143,191,11)',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color:
                      item.focus == false || item.focus == undefined
                        ? 'rgb(143,191,11)'
                        : 'white',
                    fontSize: 17,
                  }}>
                  {fakeAPi?.user_information?.tag}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: '#707070', height: 1, margin: 15}} />
        <View style={{marginHorizontal: 10}}>
          <FlatList
            data={FAKEDATAEVENT}
            keyExtractor={item => item.like}
            renderItem={({item, index}) => (
              <View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image
                    source={item.img}
                    style={{height: 110, width: '35%'}}
                  />
                  <View style={{flex: 0.5}} />
                  <View style={{flexDirection: 'column', flex: 400}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        marginStart: 10,
                      }}>
                      {item.title}
                    </Text>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={{fontSize: 10, marginTop: 5, marginEnd: 10}}>
                        {item.blog}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginStart: 10,
                        marginTop: 10,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#5F5F5F',
                          flex: 2,
                          fontSize: 10,
                        }}>
                        {item.smailBoLog}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#5F5F5F',
                          flex: 1,
                          fontSize: 10,
                        }}>
                        {item.time}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#5F5F5F',
                          flex: 1,
                          fontSize: 10,
                        }}>
                        {item.like}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 49}}>
                    <Image
                      style={{
                        width: 20,
                        height: 6,
                        alignSelf: 'center',
                        marginVertical: 30,
                      }}
                      source={icons.cham}
                    />
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#5F5F5F',
                    marginVertical: 20,
                  }}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default UserProfile;
