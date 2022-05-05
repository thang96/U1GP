import {NavigationContainer, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  FlatList,
  LogBox,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../../constants/colors';
import constant from '../../constants/constant';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';
import api from '../../repositories/api/api';
import deviceInfoModule from 'react-native-device-info';
import getDataTopTag from '../../repositories/api/getTopTag';
function RegisterToCompete04(props) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const udid = deviceInfoModule.getUniqueId();
  const [tag, setTag] = useState('');
  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);

  const [tagApi, setTagApi] = useState([]);

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
    onGetTag();
  }, [onGetTag]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShow(false);
    });
  });
  const dispatch = useDispatch();
  const route = useRoute();

  console.log(route.params);

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
  const chooseList = choose.map(it => it.name);
  console.log(JSON.stringify(chooseList), 'chose');

  const ALLTAG = [];
  const [allTag, setAllTag] = useState(ALLTAG);

  useEffect(() => {
    let NEWALLTAG = [...selectTags, ...prepareTags];
    setAllTag(NEWALLTAG);
  }, [selectTags, prepareTags]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'column',
              flex: 10,
              elevation: 1,
              paddingHorizontal: 10,
            }}>
            {keyboardIsShow == false && (
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'black',
                  alignSelf: 'center',
                  marginVertical: 20,
                }}>
                バッシュタグを10個まで登録できます
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
                      ? alert('タグはすでに存在します')
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
                onPress={async () => {
                  console.log( 'asdkjbsadjsad----------------sakdasd-as',udid,'dsaaaaaaaaaaaaaaaaaaaa------');
                  await api
                    .postDataInput({
                      ...route.params,
                      tag: chooseList,
                      udid: deviceInfoModule.getUniqueId(),
                    })
                    .then(res => {
                    })
                    .catch((error) => {console.log(error,'-----------------------------');});
                    dispatch(navigateAction({name: 'U1GPTop01'}));
                }}>
                <Text
                  style={{
                    fontSize: constant.HEIGHT > 700 ? 24 : 14,
                    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
                    alignSelf: 'center',
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
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
export default RegisterToCompete04;
