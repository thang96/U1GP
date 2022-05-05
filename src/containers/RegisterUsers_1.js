import React  , {useState}from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Text , SafeAreaView ,ScrollView , Image,TextInput , TouchableOpacity} from 'react-native'
import { icons } from '../constants';
function RegisterUsers_1(props){
    const options = [
        {id: 1, value: 1, label: '男'},
        {id: 2, value: 2, label: '女'},
      ];
    const goToEvent = [
        {id: 1, value: 1, label: '行きます'},
        {id: 2, value: 2, label: '行きません'},
      ];
    const [isShow, setIsShow] = useState(false);
    const [selected, setSelected] = useState(null);
    const [leaflets, setLeaflets] = useState(false);
    const [website, setWebsite] = useState(false);
    const [friend, setFriend] = useState(false);
    const [otherReason, setOtherReason] = useState(false);
    const onChangeIsShow = newValue => {
        return () => {
          setIsShow(newValue);
        };
      };
      const onChangeOption = newOption => {
        return () => {
          // console.log('Pressed: ', newOption);
          setSelected(newOption);
          setIsShow(false);
        };
      };
      const [isGo, setIsGo] = useState(false);
      const [selectedToGo, setSelectedToGo] = useState(null);
    
      const onChangeIsGo = newValue => {
        return () => {
          setIsGo(newValue);
        };
      };
  return(
    <SafeAreaView style={{flex: 1}}>
         <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
          <View style={{paddingHorizontal: 10, height: 56}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1}} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>投票権</Text>
              </View>

              <Text style={{fontSize: 40, fontWeight: 'bold'}}>10</Text>
              <View style={{flexDirection: 'column', marginStart: 40}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  たくさん回答すれば
                </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  投票権アップ！
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{height: 3, backgroundColor: 'grey', marginVertical: 10}}
          />
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="   ニックネーム"
              keyboardType="default"
              style={{borderWidth: 2 , height :60, borderRadius: 5, flex: 1}}
            />
            <TouchableOpacity>
              <View>
                <Image
                  source={icons.cameraPicture}
                  style={{ height : 60 , width :60 , marginStart : 10}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TextInput
              placeholder="   お住まいの地域"
              keyboardType="default"
              style={{borderWidth: 2, borderRadius: 5, flex: 1}}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                position: 'relative',
                zIndex: 9999,
                width: 150,
                borderWidth: 1,
                borderRadius: 5,
              }}>
              <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
                <View
                  style={{
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingEnd: 5,
                    paddingStart: 10,
                  }}>
                  <Text>{selected?.label ?? ' 性別'}</Text>
                  <Image  source={icons.sortDow} style={{height : 20 , width : 20}} />
                </View>
              </TouchableOpacity>
              {isShow && (
                <View
                  style={{
                    position: 'absolute',
                    top: 52,
                    left: 0,
                    flex: 1,
                    backgroundColor: 'white',
                    width: '100%',
                  }}>
                  {options.map(option => (
                    <TouchableOpacity
                      key={option.id}
                      onPress={onChangeOption(option)}>
                      <View
                        style={{
                          borderStyle: 'solid',
                          padding: 12,
                          borderWidth: 1,
                          borderRadius: 5,
                        }}>
                        <Text style={{textAlign: 'center'}}>
                          {option.label}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            <TextInput
              placeholder="   年齢"
              keyboardType="default"
              style={{
                borderWidth: 2,
                borderRadius: 5,
                width: 150,
                marginStart: 20,
              }}
            />

            <Text style={{fontSize: 20, marginTop: 20, marginStart: 10}}>
              歳
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TextInput
              placeholder="   観戦歴2回目"
              keyboardType="default"
              style={{
                borderWidth: 2,
                borderRadius: 5,
                width: 150,
              }}
            />
          </View>
          <Text style={{marginTop: 20, marginBottom: 10, fontWeight: 'bold'}}>
            2022年開催の鈴鹿8耐をどこで知りますか ?
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (leaflets == false) {
                  setLeaflets(true);
                } else if (leaflets == true) {
                  setLeaflets(false);
                }
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
           
              <Text style={{marginEnd: 20, marginStart: 10}}>チラシ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (website == false) {
                  setWebsite(true);
                } else if (website == true) {
                  setWebsite(false);
                }
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>Webサイト</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <TouchableOpacity
              onPress={() => {
                if (friend == false) {
                  setFriend(true);
                } else if (friend == true) {
                  setFriend(false);
                }
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <Icon
                name={friend ? 'check-square-o' : 'square-o'}
                size={25}
                color={friend ? 'red' : 'grey'}
              /> */}
              <Text style={{marginEnd: 20}}>友人から聞いた</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (otherReason == false) {
                  setOtherReason(true);
                } else if (otherReason == true) {
                  setOtherReason(false);
                }
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <Icon
                name={otherReason ? 'check-square-o' : 'square-o'}
                size={25}
                color={otherReason ? 'red' : 'grey'}
              /> */}
              <Text>その他</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 20, marginBottom: 10, fontWeight: 'bold'}}>
            2022年開催の鈴鹿8耐は行きますか ?
          </Text>
          <View
            style={{
              position: 'relative',
              zIndex: 9999,
              width: 150,
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={onChangeIsGo(!isGo)}>
              <View
                style={{
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingEnd: 5,
                  paddingStart: 10,
                }}>
                <Text>{selectedToGo?.label ?? ''}</Text>
                {/* <Icon name="caret-down" color="grey" size={24} /> */}
              </View>
            </TouchableOpacity>
            {isGo && (
              <View
                style={{
                  position: 'absolute',
                  top: 52,
                  left: 0,
                  flex: 1,
                  backgroundColor: 'white',
                  width: '100%',
                }}>
                {goToEvent.map(optionGo => (
                  <TouchableOpacity
                    key={optionGo.id}
                    onPress={onChangeOptionGo(optionGo)}>
                    <View
                      style={{
                        borderStyle: 'solid',
                        padding: 12,
                        borderWidth: 1,
                        borderRadius: 5,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        {optionGo.label}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          <TextInput
            placeholder="   ひとことコメント"
            keyboardType="default"
            style={{
              borderWidth: 2,
              borderRadius: 5,
              flex: 1,
              marginTop: 5,
            }}
          />
          <Text style={{marginTop: 20, marginBottom: 10, fontWeight: 'bold'}}>
            2輪の所有歴
          </Text>
          <TextInput
            keyboardType="default"
            style={{
              borderWidth: 2,
              borderRadius: 5,
              height: 150,
              fontSize: 18,
            }}
          />

          <TouchableOpacity
            onPress={() => {
            //   navigate('RegisterUsersToVote2');
            }}
            style={{
              marginVertical: 25,
              borderRadius: 5,
              backgroundColor: 'grey',
              height: 40,
              justifyContent: 'center',
              alignSelf: 'center',
              width: 150,
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
                次へ
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
        )
}
export default RegisterUsers_1