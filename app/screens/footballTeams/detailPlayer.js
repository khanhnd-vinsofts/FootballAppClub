import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import BaseText from '../../components/baseText';


export default class DetailPlayerScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{ width: 20, height: 20, marginLeft: 10, marginTop: 10 }}
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('FootballTeam')}
                >
                    <Image source={require('../../assets/images/close.png')} style={{ width: 12, height: 12, tintColor: '#0072FB' }} />
                </TouchableHighlight>
                <View style={styles.layoutImage}>
                    <View style={styles.image}>
                        <Image source={require('../../assets/images/ronando.png')} style={{ width: '100%', height: '100%', borderRadius: 20 }} resizeMode="cover" />
                    </View>
                    <View style={styles.infoDetail}>
                        <View style={{ flex: 3, marginLeft: 20 }}>
                            <BaseText style={{ color: '#ffffff', fontWeight: "500", fontSize: 22, marginTop: 5 }}>Leonan Messi</BaseText>
                            <BaseText style={{ color: '#ffffff', fontWeight: "500", fontSize: 16, marginTop: 5 }}>03-08-1995</BaseText>
                            <BaseText style={{ color: '#ffffff', fontWeight: "500", fontSize: 16, marginTop: 5 }}>Tiền đạo</BaseText>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                                <BaseText style={{ color: '#0072FB', fontWeight: "500", fontSize: 28 }}>10</BaseText>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 35 }}>
                        <TouchableHighlight
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: '#0072FB',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 30,
                            }}

                        >
                            <Image
                                source={require('../../assets/images/ribbon.png')}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: '#ffffff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 30,

                                borderWidth: 1,
                                borderColor: '#0072FB'
                            }}

                        >
                            <Image
                                source={require('../../assets/images/delete.png')}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: '#0072FB',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 30,
                            }}

                        >
                            <Image
                                source={require('../../assets/images/edit.png')}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    layoutImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    image: {
        width: '90%',
        height: 300,
    },
    infoDetail: {
        width: '90%',
        height: 100,
        backgroundColor: '#0072FB',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
    },
})