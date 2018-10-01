import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import BaseText from '../../components/baseText';
import BaseInput from '../../components/baseInput';

export default class AddPlayerScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight
                        style={{ width: 20, height: 20, marginLeft: 10, marginTop: 10 }}
                        underlayColor='transparent'
                        onPress={() => this.props.navigation.navigate('FootballTeam')}
                    >
                        <Image source={require('../../assets/images/close.png')} style={{ width: 10, height: 10 }} />
                    </TouchableHighlight>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
                        <Image source={require('../../assets/images/ronando.png')} style={{ width: 170, height: 170 }} resizeMode="contain" />
                    </View>
                </View>

                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                <View style={styles.layoutForm}>
                    <View >
                        <BaseText style={styles.textInfo} bold={true}>Thông tin bắt buộc</BaseText>
                    </View>
                    <View >
                        <BaseInput

                            placeholder="Họ và tên"
                        />
                        <BaseInput
                            placeholder="Năm sinh"
                        />
                        <BaseInput
                            placeholder="Vị trí"
                        />
                    </View>

                </View>

                <View style={styles.layoutForm}>
                    <View >
                        <BaseText style={styles.textInfo} bold={true}>Thông tin bổ sung</BaseText>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <BaseInput
                                    style={{ width: 130 }}
                                    placeholder="Số áo"
                                />
                            </View>
                            <View style={{ flex: 1, marginLeft: 17 }}>
                                <BaseInput
                                    style={{ width: 140 }}
                                    placeholder="Quốc tịch"
                                />
                            </View>
                        </View>
                        <BaseInput
                            placeholder="Giới thiệu cầu thủ"
                        />
                    </View>

                </View>
                <View style={styles.layoutForm}>
                    <View >
                        <BaseText style={styles.textInfo} bold={true}>CMND/Hộ chiếu</BaseText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.layoutCMND}>
                            <BaseText style={{fontSize: 20}} bold={true}>Mặt trước</BaseText>
                        </View>
                        <View style={[styles.layoutCMND, {marginLeft: 30}]}>
                            <BaseText style={{fontSize: 20}} bold={true}>Mặt sau</BaseText>
                        </View>
                    </View>
                </View>
                </ScrollView>
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
                            right: 0,
                            marginRight: 50,
                            marginBottom: 25
                        }}
                        
                    >
                        <Image 
                            source={require('../../assets/images/done.png')}
                            style={{width: 15, height: 15}}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        height: 170,
        backgroundColor: '#0072FB',
        flexDirection: 'row',
        
    },
    layoutForm: {
        flexDirection: 'column',
        marginTop: 15,
        alignItems: 'center',
    },
    textInfo: {
        fontSize: 18,
        color: '#006BEE',
        
    },
    layoutCMND: {
        width: 135, 
        height: 100, 
        backgroundColor: '#E8E8E8', 
        marginTop: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})