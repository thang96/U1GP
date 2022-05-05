import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Logo from '../resource/icon/icon-logo.svg';
import {TouchableOpacity} from 'react-native';
import IconSetting from '../resource/icon/icon-setting.svg';
import {
  TopPage,
  CameraUI,
  ChooseToRegister,
  RegisterToVote01,
  RegisterToVote02,
  RegisterToCompete01,
  RegisterToCompete02,
  RegisterToCompete03,
  RegisterToCompete04
} from '../containers';
const Stack = createStackNavigator();

function StackNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => {}} style={{marginRight: 20}}>
            <IconSetting />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="TopPage"
        component={TopPage}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="ChooseToRegister"
        component={ChooseToRegister}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="RegisterToVote01"
        component={RegisterToVote01}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="RegisterToVote02"
        component={RegisterToVote02}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="RegisterToCompete01"
        component={RegisterToCompete01}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="CameraUI"
        component={CameraUI}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="RegisterToCompete02"
        component={RegisterToCompete02}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="RegisterToCompete03"
        component={RegisterToCompete03}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
      <Stack.Screen
        name="RegisterToCompete04"
        component={RegisterToCompete04}
        options={{
          headerShown: true,
          title: <Logo />,
        }}
      />
    </Stack.Navigator>
  );
}

StackNavigator.propTypes = {};

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(StackNavigator);
