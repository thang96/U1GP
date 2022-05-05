import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {icons, images} from '../../constants';
function RegisterToVote01(props) {
  console.log(31);
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const onChangeIsShow = newValue => {
    return () => {
      setIsShow(newValue);
    };
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
        <View style={{flex: 10, justifyContent: 'center', marginVertical: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 18,
              color: 'black',
            }}>
            プロフィール登録
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
          placeholderTextColor={'grey'}
            placeholder=" ニックネーム"
            style={{borderWidth: 1, borderRadius: 5, flex: 1,color:'black'}}
          />
          <TouchableOpacity
              onPress={()=>{
                navigation.navigate('CameraUI')
              }}
              style={{marginStart: 10, alignItems: 'center'}}>
            <Image
              source={icons.cameraPicture}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                marginTop: 15,
                borderWidth: 1,
                width: 130,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 5,
                borderRadius: 5,
                marginEnd: 15,
              }}>
              <Text style={{color:'grey'}}>{selected?.label ?? ' 免許歴'}</Text>
              <Image source={icons.sortDow} style={{height: 20, width: 20}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                marginTop: 15,
                borderWidth: 1,
                width: 130,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 5,
                borderRadius: 5,
                marginEnd: 15,
              }}>
              <Text style={{color:'grey'}}>{selected?.label ?? ' 年齢'}</Text>
              <Image source={icons.sortDow} style={{height: 20, width: 20}} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                marginTop: 15,
                borderWidth: 1,
                width: 130,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 5,
                borderRadius: 5,
                marginEnd: 15,
              }}>
              <Text style={{color:'grey'}}>{selected?.label ?? ' 性別'}</Text>
              <Image source={icons.sortDow} style={{height: 20, width: 20}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                marginTop: 15,
                borderWidth: 1,
                width: 130,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 5,
                borderRadius: 5,
                marginEnd: 15,
              }}>
              <Text style={{color:'grey'}}>{selected?.label ?? ' 都道府県'}</Text>
              <Image source={icons.sortDow} style={{height: 20, width: 20}} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color:'black'}}>現愛車</Text>
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 12,color:'grey'}}>
            複数の場合はカンマ区切り
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 2,
              height: 40,
              color:'black'
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color:'black'}}>歴代車種</Text>
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 12,color:'grey'}}>
            複数の場合はカンマ区切り
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 2,
              height: 40,
              color:'black'
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color:'black'}}>欲しい車種</Text>
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 12,color:'grey'}}>
            複数の場合はカンマ区切り
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 2,
              height: 40,
              color:'black'
            }}
          />
        </View>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
            <View
              style={{
                height: 40,
                borderRadius: 5,
                flexDirection: 'row',
                marginTop: 12,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingEnd: 5,
                paddingStart: 10,
                marginTop: 20,
              }}>
              <Text style={{color:'grey'}}>{selected?.label ?? ' 8耐&motoGP観戦歴'}</Text>
              <Image
                source={icons.sortDow}
                style={{height: 20, width: 20, marginLeft: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 18,color:'black'}}>
            ツーリングエリア
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TextInput
          placeholderTextColor={'grey'}
            placeholder="   フリーテキスト"
            style={{
              flex: 1,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 2,
              height: 60,
              color:'black'
            }}
          />
        </View>
        <View>
          <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 18,color:'black'}}>
            ギア
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TextInput
          placeholderTextColor={'grey'}
            placeholder="   フリーテキスト"
            style={{
              flex: 1,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 2,
              height: 60,
              color:'black'
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterToVote02');
            }}
            style={{
              marginBottom: 25,
              borderRadius: 5,
              backgroundColor: 'grey',
              height: 40,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              width: 150,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
              次へ
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default RegisterToVote01;
