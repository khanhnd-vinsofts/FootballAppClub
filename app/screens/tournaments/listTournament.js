import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';
import BaseText from '../../components/baseText';

export default class TournamentScreen extends Component {
    static navigationOptions = () => ({
        drawerLabel: "Tournament",
        title: "Giải đấu",
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                <View style={{flex: 1, alignItems: 'center'}}>
                    <BaseText style={{marginRight: 220, fontSize: 17, color: '#0072FB', marginTop: 15}} bold>Giải đấu nổi bật</BaseText>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 10}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 1, alignItems: 'center', marginBottom: 15, marginTop: 10}}>
                    <BaseText style={{marginRight: 200, fontSize: 17, color: '#0072FB', marginTop: 15}} bold>Tất cả giải đấu(15)</BaseText>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 25}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 15}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 15}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 15}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 15}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 15}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: '90%', height: 150, marginTop: 15}}
                        onPress={() => this.props.navigation.navigate('DetailTournament')}
                    >
                    <View style={{flex: 1}}>
                        <Image source={require('../../assets/images/background.png')} style={{width: '100%', height: 150, borderRadius: 6, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>
                        <BaseText style={[styles.baseText, {fontSize: 25, marginTop: 50}]}>YOUR LOGO</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>Giải đấu trẻ Nam Định</BaseText>
                        <BaseText style={[styles.baseText, {fontSize: 22}]} bold>23/9 - 30/9</BaseText>
                    </View>
                    </TouchableHighlight>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    baseText: {
        color: '#ffffff', 
        marginLeft: 20
    }
});

