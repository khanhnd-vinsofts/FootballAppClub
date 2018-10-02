import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, TextInput, FlatList } from "react-native";

import IconDrawerNavigator from '../../components/drawerNavigator';
import IconSearch from '../../components/search';
import BaseText from '../../components/baseText';

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
        data: [
            {
                id: 0,
                name: 'Nguyễn Duy Khánh',
                birth: '03-08-1995',
                position: 3
            },
            {
                id: 1,
                name: 'Nguyễn Hải Đăng',
                birth: '03-07-1993',
                position: 3
            },
            {
                id: 2,
                name: 'Nguyễn Quang Hải',
                birth: '12-08-1998',
                position: 1
            },
            {
                id: 3,
                name: 'Đỗ  Quang Linh',
                birth: '15-11-1997',
                position: 2
            },
            {
                id: 4,
                name: 'Nguyễn Văn Nam',
                birth: '03-08-1992',
                position: 1
            },
            {
                id: 5,
                name: 'Nguyễn Văn Quyết',
                birth: '02-09-1996',
                position: 2
            },
            {
                id: 6,
                name: 'Nguyễn Văn Toàn',
                birth: '02-09-1995',
                position: 1
            },
            {
                id: 7,
                name: 'Nguyễn Văn Tuấn',
                birth: '02-09-1995',
                position: 3
            },
            {
                id: 8,
                name: 'Nguyễn Văn Quân',
                birth: '02-09-1995',
                position: 3
            },
            {
                id: 9,
                name: 'Nguyễn Văn Nguyên',
                birth: '02-09-1995',
                position: 2
            },
            {
                id: 10,
                name: 'Lee Nguyễn',
                birth: '02-09-1995',
                position: 3
            },
            {
                id: 11,
                name: 'zonathan joe',
                birth: '02-09-1995',
                position: 1
            },

        ],
        screen: 0,
        dataFilter: [],
    };
    componentDidMount() {
        this.setState({ dataFilter: this.state.data });
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
        let dataFilter = this.state.data.filter(item => item.position === position.id);
        if (screen === 0) {
            dataFilter = this.state.data;
        }
        this.setState({ dataFilter });

    }
    filterPositionLeft() {
        let screen = this.state.screen - 1;
        if (screen < 0) screen = this.state.members.length - 1;
        this.setState({ screen });
        const position = this.state.members[screen];
        let dataFilter = this.state.data.filter(item => item.position === position.id);
        if (screen === 0) {
            dataFilter = this.state.data;
        }
        this.setState({ dataFilter });

    }

    viewPosition(position) {
        let p = this.state.members.filter(p => p.id === position);
        p = p[0];
        return p.status;
    }

    render() {
        const screen = this.state.members[this.state.screen];


        return (
            <View style={styles.container}>
                <View style={styles.layoutHeader}>
                    <TouchableHighlight
                        style={[styles.touchableArrow, { left: 10 }]}
                        underlayColor='transparent'
                        onPress={() => { this.filterPositionLeft() }}
                    >
                        <Image source={require('../../assets/images/arow.png')} style={styles.arrow} resizeMode="contain" />
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'column', width: 272, alignItems: 'center', top: 10 }}>
                        <BaseText style={{ fontSize: 18, color: '#ffffff' }} bold={true}>{screen.status}</BaseText>
                        <BaseText style={{ fontSize: 28, color: '#ffffff', fontWeight: '500', }} bold={true}>{this.state.dataFilter.length}</BaseText>
                    </View>
                    <TouchableHighlight
                        style={[styles.touchableArrow, { right: 10 }]}
                        underlayColor='transparent'
                        onPress={() => { this.filterPositionRight() }}
                    >
                        <Image source={require('../../assets/images/arrow-right.png')} style={styles.arrow} resizeMode="contain" />
                    </TouchableHighlight>
                </View>

                    {this.state.dataFilter.length === 0 ?
                        <View style={styles.Warning}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/football.png')} style={{ width: 70, height: 70, tintColor: '#666666' }} resizeMode="contain" />
                                <Image source={require('../../assets/images/close.png')} style={{ width: 25, height: 25, tintColor: '#CC0000', marginLeft: -16, marginTop: 45 }} resizeMode="contain" />
                            </View>
                           <View style={{marginTop: '5%', alignItems: 'center'}}>
                           <BaseText style={{fontSize: 16}} bold>Bạn chưa có hậu vệ nào trong đội bóng.</BaseText>
                            <BaseText style={{fontSize: 16}} bold>Click vào button (+) để thêm vị trí mới này.</BaseText>
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
                                                <BaseText style={{ fontSize: 18, color: '#222222' }} bold={true}>{item.name}</BaseText>
                                                <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{item.birth}</BaseText>
                                            </View>
                                            <View style={{ marginLeft: 60, marginTop: 11, width: 100 }}>
                                                <BaseText style={{ fontSize: 13, color: '#A9ABAB' }} bold={true}>{this.viewPosition(item.position)}</BaseText>
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
        height: 80,
        backgroundColor: '#0072FB',
        top: 3,
        borderRadius: 5,
        flexDirection: 'row',

    },
    touchableArrow: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        top: 5
    },
    arrow: {
        width: 20,
        height: 20,
        paddingHorizontal: 10,
    },

    ListPlayer: {
        width: '100%',
        marginTop: 20,
    },
    ListMember: {
        width: '100%',
        height: 70,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ListMember1: {
        width: '100%',
        height: 70,
        backgroundColor: '#ffffff',
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