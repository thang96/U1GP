import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform,View,Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {icons,images} from '../constants'
import colors from '../constants/colors';
import StackNavigator from './StackNavigator';
import {ScreenCheck1,ScreenCheck2,ScreenCheck3,ScreenCheck4} from '../containers'
import constant from "../constants/constant";
import IconHome from '../resource/icon/icon-home.svg';
import IconFlag from '../resource/icon/icon-flag.svg';
import IconProfile from '../resource/icon/icon-profile.svg';
import IconBook from '../resource/icon/icon-book.svg';
import IconSearch from '../resource/icon/icon-search.svg';
import StackNavigateMyInfo from './StackNavigateMyInfo';

const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      initalRouterName={'StackNavigator'}
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          let label;
          switch (route.name) {
            case 'Home':
              label = 'ホーム';
              break;
            case 'GrandPrix':
              label = 'お知らせ';
              break;
            case 'MyMachine':
              label = 'マイページ';
              break;
            case 'SNS':
              label = 'SNS';
              break;
            case 'Together':
              label = '集まろう';
              break;
            default:
              break
          }
          return (
            <Text
              style={[
                styles.textTabBarLabel,
                focused ? styles.colorPrimary : styles.colorLabelTabBar,
              ]}
            >{label}</Text>
          );
        },
      })}
      // swipeEnabled={false}
      tabBarOptions={{
        showIcon: true,
        indicatorStyle: {height: 0},
        style: {
          height: constant.HEIGHT * 0.1,
          paddingTop: 14,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
             <IconHome />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="GrandPrix"
        component={ScreenCheck1}
        options={{
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <IconFlag/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyMachine"
        component={StackNavigateMyInfo}
        options={{

          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <IconProfile/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SNS"
        component={ScreenCheck3}
        options={{
          tabBarVisibilityAnimationConfig:'red',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <IconBook/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Together"
        component={ScreenCheck4}
        options={{
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <IconSearch/>
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  textTabBarLabel: {
    fontSize: Platform.OS === 'ios' ? 12 : 8,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 12 : 0,
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorLabelTabBar: {
    color: colors.labelTabbar,
  },
});

TabNavigator.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator);
