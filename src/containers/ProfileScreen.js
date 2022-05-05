import React, {Component, useState} from 'react';
import {Text, StyleSheet,
  SafeAreaView,} from 'react-native';
import commonStyle from "../resource/styles/commonStyles";
import colors from '../constants/colors';

function ProfileScreen() {
  return(
    <SafeAreaView style={[commonStyle.flex1, {backgroundColor: colors.white}]}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
}

ProfileScreen.propTypes = {};

const styles = StyleSheet.create({

});

export default ProfileScreen;
