import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Fonts } from '../../assets/Fonts';

export default props => <TextInput
    {...props}
    style={[styles.container, props.style]}
    underlineColorAndroid='rgba(0,0,0,0)'
    placeholderTextColor="#CCCCCC"
    selectionColor="#DDDDDD"
/>

const styles = StyleSheet.create({
    container: {
        width: 300,
        paddingTop: 10,
        paddingBottom: -10,
        borderBottomWidth: 0.5,
        color: '#626463',
        borderColor: '#006BEE',
        fontFamily: Fonts.DisplayRegular,
    }
})