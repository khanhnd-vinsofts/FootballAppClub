import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, TextInput, FlatList } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';
import BaseText from '../../components/baseText';
import dataPlayer from '../../data/dataPlayer';

export default class FootballTeamScreen extends Component {
    state = {
        members: [
            {
                status: 'Tổng số cầu thủ',
                id: 0
            },
            {
                status: 'Hậu vệ',
                id: 1
            },
            {
                status: 'Tiền vệ',
                id: 2
            },
            {
                status: 'Tiền đạo',
                id: 3
            },
            {
                status: 'Thủ môn',
                id: 4
            },
        ],
        screen: 0,
        dataFilter: [],
    };
    componentDidMount() {
        this.setState({ dataFilter: dataPlayer });
    }
    static navigationOptions = () => ({
        drawerLabel: "FootballTeam",
        title: "Đội bóng",
        headerTitleStyle: {
            color: '#222222',
            textAlign: 'center',
        },
        headerLeft: (
            <IconDrawerNavigator />
        ),
        headerRight: (
            <IconSearch />
        )
    });

    filterPositionRight() {
        let screen = this.state.screen + 1;
        if (screen > this.state.members.length - 1) screen = 0;
        this.setState({ screen });
        const position = this.state.members[screen];
        
        let dataFilter = dataPlayer.filter(item => item.position === position.status);
        if (screen === 0) {
            dataFilter = dataPlayer;
        }
        this.setState({ dataFilter });
        
    }
    filterPositionLeft() {
        let screen = this.state.screen - 1;
        if (screen < 0) screen = this.state.members.length - 1;
        this.setState({ screen });
        const position = this.state.members[screen];
        let dataFilter = dataPlayer.filter(item => item.position === position.status);
        if (screen === 0) {
            dataFilter = dataPlayer
        }
        this.setState({ dataFilter });

    }

    viewPosition(position) {
        let p = this.state.members.filter(p => p.status === position);
        p = p[0];
        return p.status;
    }

    render() {
        const screen = this.state.members[this.state.screen];
        console.log(this.state.dataFilter);
        return (
            <View style={styles.container}>
                <View style={styles.layoutHeader}>
                    <TouchableHighlight
                        style={[styles.touchableArrow, { left: 5 }]}
                        underlayColor='transparent'
                        onPress={() => { this.filterPositionLeft() }}
                    >
                        <Image source={require('../../assets/images/arow.png')} style={styles.arrow} resizeMode="contain" />
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'column', width: 230, alignItems: 'center' }}>
                        <BaseText style={{ fontSize: 22, color: '#ffffff' }} bold={true}>{screen.status}</BaseText>
                        <BaseText style={{ fontSize: 32, color: '#ffffff', fontWeight: '500', }} bold={true}>{this.state.dataFilter.length}</BaseText>
                    </View>
                    <TouchableHighlight
                        style={[styles.touchableArrow, { right: 5 }]}
                        underlayColor='transparent'
                        onPress={() => { this.filterPositionRight() }}
                    >
                        <Image source={require('../../assets/images/arrow-right.png')} style={styles.arrow} resizeMode="contain" />
                    </TouchableHighlight>
                </View>
                
                {/* Bắt nhưng vị trí còn thiếu đưa ra cảnh báo  */}

                {
                    this.state.dataFilter.length === 0 ?
                    <View style={styles.Warning}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/images/football.png')} style={{ width: 70, height: 70, tintColor: '#777777' }} resizeMode="contain" />
                            <Image source={require('../../assets/images/close.png')} style={{ width: 25, height: 25, tintColor: '#CC0000', marginLeft: -16, marginTop: 45 }} resizeMode="contain" />
                        </View>
                        <View style={{ marginTop: '5%', alignItems: 'center' }}>
                            <BaseText style={{ fontSize: 16 }} bold>Bạn chưa có {screen.status} nào trong đội bóng.</BaseText>
                            <BaseText style={{ fontSize: 16 }} bold>Click vào button (+) để thêm vị trí mới này.</BaseText>
                        </View>
                    </View>
                    :
                    <FlatList
                        data={this.state.dataFilter}
                        style={styles.ListPlayer}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableHighlight
                                    onPress={() => this.props.navigation.navigate('DetailPlayer')}
                                >
                                    <View style={[item.id % 2 === 0 ? styles.ListMember : styles.ListMember1]}>
                                        <View style={styles.Image}></View>
                                        <View style={{ marginLeft: 30, flexDirection: 'column', width: '45%' }}>
                                            <BaseText style={{ fontSize: 18, color: '#222222', fontWeight: 'bold' }} bold={true}>{item.name}</BaseText>
                                            <BaseText style={{ fontSize: 15, color: '#A9ABAB', marginTop: 5 }} bold={true}>{item.birth}</BaseText>
                                        </View>
                                        <View style={{  marginTop: 35, marginLeft: '6%' }}>
                                            <BaseText style={{ fontSize: 15, color: '#A9ABAB' }} bold={true}>{this.viewPosition(item.position)}</BaseText>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            );
                        }}
                    />
                }

                <View style={{ flexDirection: 'row', left: 130 }}>
                    <TouchableOpacity
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
                        onPress={() => this.props.navigation.navigate('AddPlayer')}
                    >
                        <Image
                            source={require('../../assets/images/add.png')}
                            style={{ width: 15, height: 15 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    layoutHeader: {
        width: '92%',
        height: 100,
        backgroundColor: '#0072FB',
        top: 3,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',

    },
    touchableArrow: {
        width: 50,
        height: 50,
        alignItems: 'center',
       marginBottom: 15,
    },
    arrow: {
        width: 25,
        height: 25,
        paddingHorizontal: 10,
    },

    ListPlayer: {
        width: '100%',
        marginTop: 20,
    },
    ListMember: {
        width: '100%',
        height: 80,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ListMember1: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Image: {
        width: 60,
        height: 60,
        left: 15,
        backgroundColor: '#D6D6D6',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#959595',
    },

    Warning: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15%'
    }

});

FootballTeamScreen.defaultProps = {};
FootballTeamScreen.propTypes = {};