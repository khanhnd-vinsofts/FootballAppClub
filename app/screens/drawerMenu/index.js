import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import BaseText from '../../components/baseText';

class DrawerMenu extends Component {
  _navigate(route) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowItem}
          onPress={() => {
            navigation.state.isDrawerOpen ? navigation.closeDrawer() : navigation.openDrawer();
            navigation.state.isDrawerOpen = !navigation.state.isDrawerOpen;
          }}
        >
          <Image source={require('../../assets/images/arow.png')} style={styles.imageArrow} resizeMode="contain" />
          <BaseText style={styles.menuText} bold={true}>Trở về</BaseText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("FootballTeam")}
        >
          <Image source={require('../../assets/images/football.png')} style={styles.imageItem} resizeMode="contain" />
          <BaseText style={styles.menuItemText} bold={true}>ĐỘI BÓNG</BaseText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("Tournament")}
        >
          <Image source={require('../../assets/images/trophy.png')} style={styles.imageItem} resizeMode="contain" />
          <BaseText style={styles.menuItemText} bold={true}>GIẢI ĐẤU</BaseText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("Record")}
        >
          <Image source={require('../../assets/images/clipboard.png')} style={styles.imageItem} resizeMode="contain" />
          <BaseText style={styles.menuItemText} bold={true}>HỒ SƠ</BaseText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("Expense")}
        >
          <Image source={require('../../assets/images/card.png')} style={styles.imageItem} resizeMode="contain" />
          <BaseText style={styles.menuItemText} bold={true}>THU CHI</BaseText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("Setting")}
        >
          <Image source={require('../../assets/images/settings.png')} style={styles.imageItem} resizeMode="contain" />
          <BaseText style={styles.menuItemText} bold={true}>CÀI ĐẶT</BaseText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowItem: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,

  },
  imageArrow: {
    width: 25,
    height: 25,
    marginLeft: 10,
    tintColor: '#006BEE'
  },
  menuText: {
    fontSize: 18,
    marginLeft: 20,
    color: '#006BEE'
  },
  menuItem: {
    height: 117,
    flexDirection: 'column',
    padding: 10,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#ffffff",
    marginBottom: 2,
    borderBottomWidth: 0.5,

  },
  imageItem: {
    width: 50,
    height: 50,
    bottom: 10,
    tintColor: '#CFCFCF'
  },
  menuItemText: {
    fontSize: 16,
    color: '#CFCFCF'
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;