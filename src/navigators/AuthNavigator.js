import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routeNames from './routeNames';
import IconSettingComponent from "../components/IconSettingComponent";
import {TouchableOpacity} from "react-native";
import IconSetting from "../resource/icon/icon-setting.svg";
import Logo from "../resource/icon/icon-logo.svg";
import VerifyCodeScreen from "../containers/checksms/VerifyCodeScreen";
import LoginScreen from "../containers/checksms/LoginScreen"

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator
      >
      <Stack.Screen
        name={routeNames.LOG_IN}
        component={LoginScreen}
        options={{
          headerShown: false,
          title: <Logo/>
        }}
      />
      <Stack.Screen
        name={routeNames.VerifyCodeScreen}
        component={VerifyCodeScreen}
        options={{
          headerShown: false,
          title: <Logo/>
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
