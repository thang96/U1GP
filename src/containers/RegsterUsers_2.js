import React  , {useState}from 'react'
import {View,Text , SafeAreaView ,ScrollView , Image,TextInput , TouchableOpacity} from 'react-native'
import { icons } from '../constants';
function RegsterUsers_2(props){
    // const options = [{title  : 'TZR250'}, {title:'YAMAHA'} , {title :'K2TECH'},{title :'K2TECH'},{title :'K2TECH'} ]
    // const optionGo =[{title :'2スト' , name :'レーサーレプリア'} ,{title :'HONDA' , name :'KAWASAKI'},{title :'チャンパー',name :'アッパーカウル'}]
   
  return(
    <SafeAreaView style={{flex: 1 , flexDirection : 'column'}}>
   
    <View style={{flexDirection: 'column', flex: 1, zIndex: 9, elevation: 1}}>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          興味のあるタグを複数登録できます
        </Text>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>TZR250</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>YAMAHA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>K2TECH</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 15, marginTop: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>2スト</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>レーサーレプリア</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 3, backgroundColor: 'grey', margin: 10}} />
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'green', fontSize: 20}}>HONDA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'green', fontSize: 20}}>KAWASAKI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'green', fontSize: 20}}>チャンパー</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'green', fontSize: 20}}>アッパーカウル</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'green',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'green', fontSize: 20}}>セパハン</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 25}}>
          <TextInput
            placeholder="    タグを追加"
            style={{
              borderWidth: 1,
              width: 200,
              borderRadius: 5,
              marginRight: 25,
            }}
          />
        </View>
        <View style={{flex: 1}} />
        <TouchableOpacity
          onPress={() => {
            // navigate('RegisterToCompete03');
          }}
          style={{
            marginVertical: 25,
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
      </SafeAreaView>
        )
}
export default RegsterUsers_2