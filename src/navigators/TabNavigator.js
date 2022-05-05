import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform,View,Image} from 'react-native';
import {connect} from 'react-redux';
import {icons,images} from '../constants'
import colors from '../constants/colors';
import StackNavigator from './StackNavigator';
import {ScreenCheck1,ScreenCheck2,ScreenCheck3,ScreenCheck4} from '../containers'


const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      initalRouterName={'StackNavigator'}
      swipeEnabled={false}
      tabBarOptions={{
        showIcon: true,
        indicatorStyle: {height: 0},
        style: {
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="ホーム"
        component={StackNavigator}
        options={{
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={icons.home} style={{width: 25, height: 25}} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="お知らせ"
        component={ScreenCheck1}
        options={{
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={icons.flag} style={{width: 25, height: 25}} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="マイページ"
        component={ScreenCheck2}
        options={{
          
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={icons.user} style={{width: 25, height: 25}} />
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
              <Image source={icons.book} style={{width: 25, height: 25}} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="集まろう"
        component={ScreenCheck4}
        options={{
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: '#efeff4',
          headerShown: true,
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={icons.search} style={{width: 25, height: 25}} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  textTabBarLabel: {
    fontSize: 12,
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
