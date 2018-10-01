import React, { Component } from 'react';
import { Text } from 'react-native';
import {Fonts} from '../../assets/Fonts';

export default props => <Text {...props} style={[{fontFamily: props.bold ? Fonts.DisplayRegular : Fonts.DisplayThin }, props.style]}>{props.children}</Text>
