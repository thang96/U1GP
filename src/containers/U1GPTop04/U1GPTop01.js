import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef , useCallback , useEffect} from 'react';
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
  LogBox
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
import api from '../../repositories/api/api';
import ListMoto from '../../repositories/api/listMoto';


function U1GPTop01(props) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])
  const dispatch = useDispatch();
  const [textSearch,setTextSearch]=useState('')
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  ENTRY_SECTIONS  = [
    '',
    'ネイキッド',
    'スポーツ＆レプリカ',
    'ツアラー',
    'アメリカン',
    'ストリート',
    'オフロード'
]
  const FAKEBUMON = [
    {bumon: 'すべて', value: '', id: 1},
    { bumon: 'ミニバイク（125cc以下）', value: 'ミニバイク（125cc以下）', id: 2 },
    { bumon: 'BIGスクーター', value: 'BIGスクーター', id: 3 },
    { bumon: 'ネイキッド', value: 'ネイキッド', id: 4 },
    { bumon: 'スポーツ＆レプリカ', value: 'スポーツ＆レプリカ', id: 5 },
    { bumon: 'ツアラー', value: 'ツアラー', id: 6 },
    { bumon: 'アメリカン', value: 'アメリカン', id: 7 },
    { bumon: 'ストリート', value: 'ストリート', id: 8 },
    { bumon: 'オフロード', value: 'オフロード', id: 9 },
  ];
  const [bumon, setBumon] = useState(FAKEBUMON);
  const [fakeAPi   , setApi] = useState({});
  const [isFocus,setIsfocus]=useState(false)
  const onGetImg = useCallback(async() => {
     try {
       let imgData =  await ListMoto()
       
       setApi(imgData)
       
       
     } catch (error) {
       console.error(error)
     }

  }, [fakeAPi]); 


  const handPressEntryTag = (tag_entry) => {
    ListMoto({tag_entry: tag_entry})
    .then(res => {
      setApi(res)
    })
    .catch(errors => {
      console.log('error')
    })
       
    
  }
  
  useEffect(() =>  {
    onGetImg()
  } ,  []) 

  return (
    <SafeAreaView style={{flex: 100, flexDirection: 'column',position: 'relative'}}>
      <View style={{flex: 100, flexDirection: 'column',backgroundColor:'rgb(255,255,255)'}}>
        <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: colors.borderColor,
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: 45,
            }}>{
              !isFocus && !textSearch &&(<Image 
              style={{width:25,height:25,position:'absolute',left:10}}
              source={icons.search}></Image>)
            }
            <TextInput
            onChangeText={text=>{
              setTextSearch(text)
            }}
              returnKeyType="done"
              placeholderTextColor={'#969696'}
              onFocus={()=>{
                setIsfocus(true)
              }}
              onBlur={()=>{
                setIsfocus(false)
              }}
              placeholder=""
              style={{
                width: '77%',
                paddingLeft: 10,
                color: 'black',
              }}
            />
            <TouchableOpacity
              style={{
                width: '20%',
                height:40,
                backgroundColor: '#969696',
                borderRadius: 5,
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.white}}>検索</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 5, height: 70}}>
          <FlatList
            horizontal
            data={bumon}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  height: 56,
                  width: 90,
                  borderColor: 'rgb(143,191,11)',
                  borderWidth: 1,
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => handPressEntryTag(item.value)}
                >
                <Text style={{color: 'rgb(143,191,11)', fontSize: 16}}>
                  {item.bumon}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <ScrollView style={{backgroundColor:'white'}}>
        <View>
          <FlatList
            numColumns={3}
            data={fakeAPi}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <TouchableOpacity
              onPress={()=>{
                dispatch(
                  navigateAction({
                    name: 'DetailProfile',
                    params: 
                      item.vehicle_id
                  }),
                );
              }}
              key={index}
                style={{width: windowWidth / 3, height: 70, marginBottom: 2,position:'relative',padding:2}}>
                <Image
                  resizeMode="cover"
                  style={{width: '100%', height: '100%',backgroundColor:'rgb(95,95,95)'}}
                  source={{uri:"http://210.245.51.29:8000/api/v1/basic/public/images/" + item.photo_0}}
                />
                <View style={{position:'absolute',bottom:0,left:0,backgroundColor:'white',flexDirection:'row'}}>
                    <Image source={icons.like} style={{width:20,height:20,marginEnd:10}}></Image>
                    <Text style={{color:'black'}}>{item.like_number}</Text>
                </View>       
              </TouchableOpacity>
            )}
          />
        </View>
        </ScrollView>
        

      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(navigateAction({name: 'HistoryVote'}));
        }}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 100,
          height: 100,
          borderRadius: 80,
          backgroundColor: 'rgb(255,147,0)',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>投票権</Text>
        <View style={{flexDirection:'row',alignContent:'flex-end'}}>
            <Text style={{color:'white',marginTop:7,fontSize:12}}>残り</Text>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{fakeAPi.like_bumber}</Text>
        </View>
        
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default U1GPTop01;