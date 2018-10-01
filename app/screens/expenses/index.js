import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';

export default class ExpenseScreen extends Component {
  static navigationOptions = () => ({
    drawerLabel: "Expense",
    title: "Thu chi",
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
        <Text>ex</Text>
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

ExpenseScreen.defaultProps = {};

ExpenseScreen.propTypes = {};
