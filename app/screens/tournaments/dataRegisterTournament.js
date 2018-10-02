
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

import BaseText from '../../components/baseText';
import dataPlayer from '../../data/dataPlayer';

export default class DataPlayerScreen extends Component {
    state = {
        activeRowKey: null,
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
                        const addCaptain = this.state.activeRowKey;
                        Alert.alert(
                            'Thông báo',
                            'Bạn có chắc chắn muốn cầu thủ này làm đội trưởng ?',
                            [
                                {
                                    text: 'Đồng ý', onPress: () => {
                                        dataPlayer.map(data => {
                                            let captain = false;
                                            if (data.id === addCaptain) {
                                                captain = true;
                                            }
                                            data.captain = captain;
                                            return data;
                                            // console.log(data);
                                        })
                                        this.props.parentFlatList.refreshFlatList(addCaptain);
                                    }
                                },
                                { text: 'Từ chối', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                            ],
                            { cancelable: true }

                        );
                    },
                    text: 'C', type: 'primary',

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
                    <View style={{ marginLeft: 30, }}>
                        <BaseText style={{ fontSize: 20, color: '#0072FB', fontWeight: 'bold', marginLeft: 25 }} bold={true}>{this.props.item.captain ? "C" : null}</BaseText>
                        <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{this.props.item.position}</BaseText>
                    </View>
                </View>
            </Swipeout>
        );
    }
}
const styles = StyleSheet.create({

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