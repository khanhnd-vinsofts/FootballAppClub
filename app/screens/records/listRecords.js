import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';

import BaseText from '../../components/baseText';

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
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableHighlight
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate('ListRecordPlayer')}
                    >
                        <View style={styles.layout}>
                            <BaseText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 7, color: '#000000' }}>Giải đấu trẻ Nam Định</BaseText>
                            <View style={{ flexDirection: 'row' }}>
                                <BaseText style={{ fontSize: 16, marginLeft: 7 }} bold>20/9 - 30/9</BaseText>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <BaseText style={{ marginRight: 5, fontSize: 16, color: '#ADAEAE' }} bold>Draft</BaseText>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <BaseText style={{ marginRight: 5, fontSize: 11, color: '#ADAEAE' }} bold>10:49,01/10/2018</BaseText>
                            </View>
                        </View>
                    </TouchableHighlight>
                    
                    <View style={styles.layout}>
                        <View style={{ marginTop: 5 }}>
                            <BaseText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 7, color: '#000000' }}>Giải đấu trẻ Nam Định</BaseText>
                            <View style={{ flexDirection: 'row' }}>
                                <BaseText style={{ fontSize: 16, marginLeft: 7, color: '#ADAEAE' }} bold>20/9 - 30/9</BaseText>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <BaseText style={{ marginRight: 5, fontSize: 16, color: '#FFBB4F' }} bold>Đang chờ xử lý</BaseText>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <BaseText style={{ marginRight: 5, fontSize: 11, color: '#ADAEAE' }} bold>10:49,01/10/2018</BaseText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.layout}>
                        <View style={{ marginTop: 5 }}>
                            <BaseText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 7, color: '#000000' }}>Giải đấu trẻ Nam Định</BaseText>
                            <View style={{ flexDirection: 'row' }}>
                                <BaseText style={{ fontSize: 16, marginLeft: 7, color: '#ADAEAE' }} bold>20/9 - 30/9</BaseText>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <BaseText style={{ marginRight: 5, fontSize: 16, color: '#6CAFFD' }} bold>Gửi thành công</BaseText>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <BaseText style={{ marginRight: 5, fontSize: 11, color: '#ADAEAE' }} bold>10:49,01/10/2018</BaseText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.layout}>
                        <View style={{ marginTop: 5 }}>
                            <BaseText style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 7, color: '#000000' }}>Giải đấu trẻ Nam Định</BaseText>
                            <View style={{ flexDirection: 'row' }}>
                                <BaseText style={{ fontSize: 16, marginLeft: 7, color: '#ADAEAE' }} bold>20/9 - 30/9</BaseText>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <BaseText style={{ marginRight: 5, fontSize: 16, color: '#FF6362' }} bold>Bị từ chối</BaseText>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <BaseText style={{ marginRight: 5, fontSize: 11, color: '#ADAEAE' }} bold>10:49,01/10/2018</BaseText>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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

