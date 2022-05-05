import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Logo from '../resource/icon/icon-logo.svg';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import IconSetting from '../resource/icon/icon-setting.svg';
import {
  RegisterToVote01,
  RegisterToVote02,
  RegisterToCompete04,
  U1GPTop01,
  HistoryVote,
  DetailProfile,
  Setting,
  MyProfile
} from '../containers';
import ChooseToRegister from '../containers/ChooseToRegister'
import RegisterToCompete01 from '../containers/RegisterToCompete01';
import RegisterToCompete03 from '../containers/RegisterToCompete03'
import TopPage from "../containers/TopPage";
import { images } from '../constants';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

function StackNavigator(props) {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerLeft:()=>(<View/>),
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => {navigation.navigate('Setting')}} style={{marginRight: 20}}>
            <IconSetting />
          </TouchableOpacity>
        ),

      }}>
      <Stack.Screen
        name="TopPage"
        component={TopPage}
        options={{
          headerShown: true,
          // title: <Logo />,title:'２ ＆ ４'
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="RegisterToVote01"
        component={RegisterToVote01}
        options={{
          headerShown: true,
          // title: <Logo />,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="RegisterToVote02"
        component={RegisterToVote02}
        options={{
          headerShown: true,
          // title: <Logo />,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="ChooseToRegister"
        component={ChooseToRegister}
        options={{
          headerShown: true,
          // title: <Logo />,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="RegisterToCompete01"
        component={RegisterToCompete01}
        options={{
          headerShown: true,
          // title: <Logo />,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="RegisterToCompete03"
        component={RegisterToCompete03}
        options={{
          headerShown: true,
          title:'2 & 4'
        }}
      />
      
      <Stack.Screen
        name="RegisterToCompete04"
        component={RegisterToCompete04}
        options={{
          headerShown: true,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="U1GPTop01"
        component={U1GPTop01}
        options={{
          headerShown: true,
          headerTitle: () => <Image source={images.logoSuzuka} style={styles.header} resizeMode={'contain'}/>
        }}
      />
      <Stack.Screen
        name="HistoryVote"
        component={HistoryVote}
        options={{
          headerShown: true,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="DetailProfile"
        component={DetailProfile}
        options={{
          headerShown: true,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: true,
          title:'2 & 4'
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: true,
          title:'2 & 4'
        }}
      />
      
    </Stack.Navigator>
  );
}

StackNavigator.propTypes = {};

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(StackNavigator);

const styles = StyleSheet.create({
  header: {height: 34,  },
})