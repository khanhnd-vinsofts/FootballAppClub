import React, { Component } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

export default class IconDrawerNavigator extends Component {

  render() {
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={() => {
            navigation.state.isDrawerOpen ? navigation.closeDrawer() : navigation.openDrawer();
            navigation.state.isDrawerOpen = !navigation.state.isDrawerOpen;
          }} >
          <Image source={require('../../assets/images/menu.png')} style={{ width: 22, height: 22, backgroundColor: 'transparent' }} resizeMode="contain" />
        </TouchableHighlight>
      </View>

    );
  }
}
