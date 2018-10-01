import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';

export default class SettingScreen extends Component {
  static navigationOptions = () => ({
    drawerLabel: "Setting",
    title: "Cài đặt",
    headerLeft: (
     <IconDrawerNavigator />
    ),
    headerRight: (
      <IconSearch />
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>set</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

SettingScreen.defaultProps = {};

SettingScreen.propTypes = {};
