import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, FlatList, Alert } from 'react-native';

import BaseInput from '../../components/baseInput';
import BaseText from '../../components/baseText';
import dataPlayer from '../../data/dataPlayer';
import DataPlayerScreen from './dataRegisterTournament';

export default class RegisterTournamentScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    state = { 
       refreshData: null
     }

     //REFRESH FLATLISTDATA

    refreshFlatList = (refreshKey) => {
        this.setState((prevstate) => {
            return {
                refreshData: refreshKey
            };
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{ width: 20, height: 20, marginLeft: 20, marginTop: 15 }}
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('DetailTournament')}
                >
                    <Image source={require('../../assets/images/close.png')} style={{ width: 12, height: 12, tintColor: '#0072FB' }} />
                </TouchableHighlight>
                <View style={{ alignItems: 'center' }}>
                    <BaseInput

                        placeholder="Nhập tên đội"
                    />
                </View>
                <View style={{ flex: 1, marginTop: 15 }}>
                    <View style={{ flexDirection: 'row'}}>
                        <BaseText style={{ fontSize: 17, color: '#0072FB', marginLeft: '8%' }} bold>Danh sách cầu thủ (15)</BaseText>
                        <TouchableHighlight>
                            <View style={{ flexDirection: 'row', marginLeft: '29%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/add.png')} style={{ width: 12, height: 12, tintColor: '#0072FB', marginRight: 5 }} />
                                <BaseText style={{ fontSize: 17, color: '#0072FB', marginBottom: 2 }} bold>Thêm</BaseText>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <FlatList
                        style={{ marginTop: 20, }}
                        data={dataPlayer}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <DataPlayerScreen item={item} index={index} parentFlatList={this}>

                                </DataPlayerScreen>
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
                    // onPress={() => this.props.navigation.navigate('AddPlayer')}
                    >
                        <Image
                            source={require('../../assets/images/send.png')}
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
    }
})