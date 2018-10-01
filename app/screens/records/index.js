import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';

export default class RecordScreen extends Component {
  static navigationOptions = () => ({
    drawerLabel: "Record",
    title: "Hồ sơ",
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
        <Text>re</Text>
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

RecordScreen.defaultProps = {};

RecordScreen.propTypes = {};
