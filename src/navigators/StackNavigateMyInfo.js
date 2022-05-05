import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Logo from '../resource/icon/icon-logo.svg';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import IconSetting from '../resource/icon/icon-setting.svg';
import {
  HistoryVote,UserProfile,MyProfile
} from '../containers';
import { images } from '../constants';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

function StackNavigator(props) {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: true,
        // headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        // headerLeft:()=>(<View/>),
        headerRight: () => (
          <TouchableOpacity onPress={() => {navigation.navigate('Setting')}} style={{marginRight: 20}}>
            <IconSetting />
          </TouchableOpacity>
        ),
      }}>
       <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: true,
          // title: <Logo />,
          title:'2 & 4'
        }}
      />
       <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: true,
          // title: <Logo />,
          title:'2 & 4'
        }}
      />
    </Stack.Navigator>
  );
}

StackNavigator.propTypes = {};

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(StackNavigator);

