import {Text} from 'react-native';
import React from 'react';
import colors from './colors';

let oldRender = Text.render;
Text.render = function (...args) {
  let origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [
      {color: colors.black, fontFamily: 'NotoSansCJKtc-Regular'},
      origin.props.style,
    ],
  });
};
