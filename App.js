import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Root from './app/navigations/router';
export default class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <Root />
      </View>
    );
  }
}


