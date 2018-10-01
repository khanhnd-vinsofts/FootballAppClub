import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, FlatList, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

import BaseInput from '../../components/baseInput';
import BaseText from '../../components/baseText';
import dataPlayer from '../../data/dataPlayer';

class DataPlayerScreen extends Component {
    state = {
        activeKey: null,
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.id });
            },
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Thông báo',
                            'Bạn có chắc chắn muốn cầu thủ này làm đội trưởng ?',
                            [
                                {
                                    text: 'Đồng ý', onPress: () => {
                                    }
                                },
                                { text: 'Từ chối', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'C', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Thông báo',
                            'Bạn có chắc chắn muốn xóa cầu thủ này không ?',
                            [
                                {
                                    text: 'Đồng ý', onPress: () => {
                                        dataPlayer.splice(this.props.index, 1);

                                        //Refresh Flatlist
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                                { text: 'Từ chối', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1

        }
        return (
            <Swipeout {...swipeSettings}>
                <View style={[styles.ListMember, { backgroundColor: this.props.index % 2 == 0 ? '#F6F6F6' : '#ffffff' }]}>
                    <View style={styles.Image}></View>
                    <View style={{ marginLeft: 30, flexDirection: 'column', width: '45%' }}>
                        <BaseText style={{ fontSize: 18, color: '#222222' }} bold={true}>{this.props.item.name}</BaseText>
                        <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{this.props.item.birth}</BaseText>
                    </View>
                    <View style={{ marginLeft: 30,  }}>
                        <BaseText style={{ fontSize: 20, color: '#0072FB', fontWeight: 'bold' }} bold={true}>C</BaseText>
                        <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{this.props.item.position}</BaseText>
                    </View>
                </View>
            </Swipeout>
        );
    }
}

export default class RegisterTournamentScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {deleteRowKey: null}

    refreshFlatList = (deleteKey) => {
        this.setState((prevstate) => {
            return {
                deleteRowKey: deleteKey
            };
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{ width: 20, height: 20, marginLeft: 20, marginTop: 15 }}
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('Tournament')}
                >
                    <Image source={require('../../assets/images/close.png')} style={{ width: 12, height: 12, tintColor: '#0072FB' }} />
                </TouchableHighlight>
                <View style={{ alignItems: 'center' }}>
                    <BaseInput
                        style={{ alignItems: 'center', }}
                        placeholder="Nhập tên đội"
                    />
                </View>
                <View style={{ flex: 1, marginTop: 15, marginBottom: 10 }}>
                    <BaseText style={{ fontSize: 17, color: '#0072FB', marginLeft: 30 }} bold>Danh sách cầu thủ (15)</BaseText>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={dataPlayer}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <DataPlayerScreen item={item} index={index} parentFlatList={this}>

                                </DataPlayerScreen>
                            );
                        }}
                    />
                </View>
                <View style={{ marginBottom: 20, marginRight: 30 }}>

                    <TouchableHighlight
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#0072FB',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: 0,
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