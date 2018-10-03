import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';
import BaseText from '../../components/baseText';
import dataTournament from '../../data/dataTournament';

import Modal from 'react-native-modal';

// const color1 = '#ADAEAE',
// const color2 = '#FFBB4F',
// const color3 = '#6CAAFD',
// const color4 = '#FF6362',

export default class DataRegisterTournament extends Component {
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
    // state = {
    //     status : [
    //         {
    //             id:1,
    //             name: 'Draft'
    //         },
    //         {
    //             id:2,
    //             name: 'Đang chờ xử lý'
    //         },
    //         {
    //             id:3,
    //             name: 'Gửi thành công'
    //         },
    //         {
    //             id:4,
    //             name: 'Bị từ chối'
    //         },
    //     ]
    // }
    state = {
        isModalVisible: false,
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ marginTop: 5, }}
                    data={dataTournament}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {

                        return (
                            <View>
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={() => this.props.navigation.navigate('ListRecordPlayer')}
                                >
                                    <View style={styles.layout}>
                                        <BaseText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 7, color: '#000000' }}>{item.name}</BaseText>
                                        <View style={{ flexDirection: 'row' }}>
                                            <BaseText style={{ fontSize: 16, marginLeft: 7 }} bold>{item.date}</BaseText>
                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                <BaseText style={{ marginRight: 5, fontSize: 16 }} bold>{item.status}</BaseText>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <BaseText style={{ marginRight: 5, fontSize: 11, color: '#ADAEAE' }} bold>{item.dateRegister}</BaseText>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    layout: {
        width: '100%',
        height: 80,
        borderBottomWidth: 0.5,
        borderColor: '#888888',
        marginTop: 15,
    }
});

