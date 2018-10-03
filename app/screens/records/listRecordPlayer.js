import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, FlatList, Alert } from 'react-native';

import BaseInput from '../../components/baseInput'
import BaseText from '../../components/baseText';
import dataPlayer from '../../data/dataPlayer';


import RegisterTournamentScreen from '../tournaments/registerTournament';

export default class ListRecordPlayer extends Component {

    static navigationOptions = {
        header: null,
    }
   

   

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{ width: 20, height: 20, marginLeft: 20, marginTop: 15 }}
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('Record')}
                >
                    <Image source={require('../../assets/images/close.png')} style={{ width: 12, height: 12, tintColor: '#0072FB' }} />
                </TouchableHighlight>
                <View style={{ alignItems: 'center' }}>
                    <BaseInput

                        placeholder="Nhập tên đội"
                    />
                </View>
                <View style={{ flex: 1, marginTop: 15 }}>
                    <BaseText style={{ fontSize: 17, color: '#0072FB', marginLeft: '8%' }} bold>Danh sách cầu thủ (15)</BaseText>
                    <FlatList
                        style={{ marginTop: 20, }}
                        data={dataPlayer}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={[styles.ListMember, { backgroundColor: item.id % 2 == 0 ? '#F6F6F6' : '#ffffff' }]}>
                                    <View style={styles.Image}></View>
                                    <View style={{ marginLeft: 30, flexDirection: 'column', width: '45%' }}>
                                        <BaseText style={{ fontSize: 18, color: '#222222' }} bold={true}>{item.name}</BaseText>
                                        <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{item.birth}</BaseText>
                                    </View>
                                    <View style={{ marginLeft: 30, }}>
                                        <BaseText style={{ fontSize: 20, color: '#0072FB', fontWeight: 'bold', marginLeft: 25 }} bold={true}>{item.captain ? "C" : null}</BaseText>
                                        <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{item.position}</BaseText>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={{ marginRight: 30 }}>

                    <TouchableHighlight
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#0072FB',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: 20,
                            right: 0
                        }}
                    onPress={() => this.props.navigation.navigate(RegisterTournamentScreen)}
                    >
                        <Image
                            source={require('../../assets/images/edit.png')}
                            style={{ width: 15, height: 15 }}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    ListMember: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Image: {
        width: 55,
        height: 55,
        left: 20,
        backgroundColor: '#D6D6D6',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#959595',
    }
})