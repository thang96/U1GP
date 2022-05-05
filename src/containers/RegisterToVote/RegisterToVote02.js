import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  LogBox,
  StyleSheet,
  Dimensions
} from 'react-native';
import colors from '../../constants/colors';
import constant from '../../constants/constant';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';
import api from '../../repositories/api/api';
import DeviceInfo from 'react-native-device-info';
import getDataTopTag from '../../repositories/api/getTopTag';

function RegisterToVote02(props) {
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])
  const uniqueId = DeviceInfo.getUniqueId();
  const [tag, setTag] = useState('');
  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);

  const dispatch = useDispatch();
  const route = useRoute();
  console.log('9999999999999',route,'999999999999999');

  const SELECTTAG = [
    {name: 'ミニバイク', focus: false},
    {name: 'スクーター', focus: false},
    {name: 'ネイキッド', focus: false},
    {name: 'スポーツ', focus: false},
    {name: 'レプリカ', focus: false},
    {name: '逆輸入車', focus: false},
    {name: 'アメリカン', focus: false},
    {name: 'オフロード', focus: false},
    {name: 'ストリート', focus: false},
    {name: 'HONDA', focus: false},
    {name: 'YAMAHA', focus: false},
    {name: 'SUZUKI', focus: false},
    {name: 'Kawasaki', focus: false},
    {name: 'Harley', focus: false},
    {name: 'BMW', focus: false},
  ];

  const checkChooseTag = () => choose.length > 0;

  const [tagApi, setTagApi] = useState([]);
  const PREPARETAG = [];
  const [selectTags, setSelectTags] = useState(SELECTTAG);
  const [prepareTags, setPrepareTags] = useState(PREPARETAG);
  const onAddNewTag = () => {
    let NewPrepare = {name: tag, focus: false};
    let NEWPREPARETAG = [...prepareTags, NewPrepare];

    setPrepareTags(NEWPREPARETAG);
  };

  const CHOOSE = [];
  const [choose, setChoose] = useState(CHOOSE);

  const ALLTAG = [];
  const [allTag, setAllTag] = useState(ALLTAG);

  const onGetTag = useCallback(async () => {
    try {
      let responseData = await getDataTopTag();
      console.log('responseData: ', responseData);
      responseData = (responseData?.data?.data || []).map(tag => ({
        name: tag,
        focus: false,
      }));
      setTagApi(responseData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    let NEWALLTAG = [...selectTags, ...prepareTags];
    setAllTag(NEWALLTAG);
  }, [selectTags, prepareTags]);

  useEffect(() => {
    onGetTag();
  }, [onGetTag]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={styles.container}>
          <View
            style={styles.eachContainer}>
            {keyboardIsShow == false && (
              <Text
                style={styles.textTitle}>
                興味のあるタグを複数登録できます
              </Text>
            )}
            <View>
              <FlatList
                data={selectTags}
                numColumns={3}
                keyExtractor={eachSelectTag => eachSelectTag.name}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectTags(prevTags => {
                        const newTags = [...prevTags];
                        newTags[index] = {...item, focus: !item.focus};
                        return newTags;
                      });
                      setChoose(prevChoose => {
                        const newChooses = [...prevChoose];
                        const indexSelected = newChooses.findIndex(
                          tag => tag.name === item.name,
                        );
                        if (indexSelected === -1) {
                          return [...newChooses, {...item, focus: true}];
                        }
                        newChooses.splice(indexSelected, 1);
                        return newChooses;
                      });
                    }}
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
                      // width:'30%'
                    }}>
                    <Text
                      style={{
                        color:
                          item.focus == false || item.focus == undefined
                            ? 'rgb(143,191,11)'
                            : 'white',
                        fontSize: 17,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: 'grey',
                marginTop: 20,
                marginBottom: 10,
              }}
            />

            <View>
              <FlatList
                data={tagApi}
                numColumns={3}
                keyExtractor={item => item.name}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setTagApi(prevTags => {
                        const newTags = [...prevTags];
                        newTags[index] = {...item, focus: !item.focus};
                        return newTags;
                      });
                      <View>
                        <Text>{item.name}</Text>
                      </View>;

                      setChoose(prevChoose => {
                        const newChooses = [...prevChoose];
                        const indexSelected = newChooses.findIndex(
                          tag => tag.name === item.name,
                        );
                        if (indexSelected === -1) {
                          return [...newChooses, {...item, focus: true}];
                        }
                        newChooses.splice(indexSelected, 1);
                        return newChooses;
                      });
                    }}
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
                      // width:'30%'
                    }}>
                    <Text
                      style={{
                        color:
                          item.focus == false || item.focus == undefined
                            ? 'rgb(143,191,11)'
                            : 'white',
                        fontSize: 17,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View>
              <FlatList
                style={{width:'100%'}}
                data={prepareTags}
                numColumns={3}
                keyExtractor={eachPrepareTag => eachPrepareTag.name}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setPrepareTags(prevTags => {
                        const newTags = [...prevTags];
                        newTags[index] = {...item, focus: !item.focus};
                        return newTags;
                      });
                      setChoose(prevChoose => {
                        const newChooses = [...prevChoose];
                        const indexSelected = newChooses.findIndex(
                          tag => tag.name === item.name,
                        );
                        if (indexSelected === -1) {
                          return [...newChooses, {...item, focus: true}];
                        }
                        newChooses.splice(indexSelected, 1);
                        return newChooses;
                      });
                    }}
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
                      marginBottom: 10,
                      borderColor: 'rgb(143,191,11)',
                      borderWidth: 1,
                      // width:'30%'
                    }}>
                    <Text
                      numberOfLines={3}
                      style={{
                        color:
                          item.focus == false || item.focus == undefined
                            ? 'rgb(143,191,11)'
                            : 'white',
                        fontSize: 17,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View style={{marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  width: '50%',
                  borderRadius: 5,
                  borderColor: colors.borderColor,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 41,
                  marginTop: 30,
                }}>
                <TextInput
                  multiline={true}
                  numberOfLines={1}
                  maxLength={50}
                  returnKeyType={'done'}
                  onChangeText={text => {
                    setTag(text);
                  }}
                  placeholderTextColor={'grey'}
                  placeholder={'タグ'}
                  value={tag}
                  style={{
                    width: '65%',
                    paddingLeft: 10,
                    color: 'black',
                  }}
                />
                <TouchableOpacity
                  disabled={tag == '' ? true : false}
                  onPress={() => {
                    let isok = false;
                    let cloneAllTags = [...allTag];
                    cloneAllTags.forEach(element => {
                      if (
                        tag.toLocaleLowerCase() ==
                        element.name.toLocaleLowerCase()
                      ) {
                        isok = true;
                      }
                    });
                    isok == true
                      ? Alert.alert('エラー', 'タグはすでに存在します')
                      : onAddNewTag();
                    setTag('');
                  }}
                  style={{
                    width: 45,
                    height: 29,
                    backgroundColor: '#969696',
                    borderRadius: 5,
                    marginRight: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: colors.white}}>追加</Text>
                </TouchableOpacity>
              </View>
            </View>
              <View
                style={{
                  bottom: 0,
                  paddingBottom: 10,
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  disabled={checkChooseTag() == false}
                  style={{
                    backgroundColor:
                      checkChooseTag() == false ? colors.btnNext : '#509BE6',
                    width: constant.WIDTH / 3,
                    alignSelf: 'center',
                    marginVertical: 20,
                    borderRadius: 5,
                    marginTop: 12,
                    padding: 6,
                  }}
                  onPress={() => {
                    api
                      .postData({
                        ...route.params,
                        tag: choose,
                        udid: DeviceInfo.getUniqueId,
                      })
                      .then(res => {
                        console.log('call');
                        dispatch(navigateAction({name: 'ChooseToRegister'}));
                      })
                      .catch(() => {});
                  }}>
                  <Text
                    style={styles.textNext}>
                    次へ
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{flex:1},
  eachContainer:{flexDirection: 'column',
  elevation: 1,
  paddingHorizontal: 10,},
  textTitle:{fontWeight: 'bold',
  fontSize: 18,
  color: 'black',
  alignSelf: 'center',
  marginVertical: 20,},
  textNext:{fontSize: constant.HEIGHT > 700 ? 24 : 14,
    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',}

})
export default RegisterToVote02;
