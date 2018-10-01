import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class Search extends Component {

  render() {
    return (
      <TouchableOpacity>
        <View style={{ paddingHorizontal: 13, top: 2 }}>
          <Image source={require('../../assets/images/search.png')} style={{ width: 21, height: 21 }} resizeMode="contain" />
        </View>
      </TouchableOpacity>
    );
  }
}
