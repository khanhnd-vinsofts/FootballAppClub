import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BaseText from '../../components/baseText';
import BaseInput from '../../components/baseInput';

export default class SignIn extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, opacity: 0.2}}>
                    <Image source={require('../../assets/images/background.png')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', top: '17%' }}>
                    <BaseText style={{ color: '#006BEE', fontSize: 40}}>YOUR LOGO</BaseText>
                </View>
                <View style={styles.layout}>
                    <View style={{ flex: 1, top: 20, left: 40 }}>
                        <Image source={require('../../assets/images/contact.png')} style={{ width: 23, height: 23 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <BaseInput style={styles.inputBox}
                            placeholder="Email"
                        />
                    </View>
                </View>

                <View style={styles.layout}>
                    <View style={{ flex: 1, top: 20, left: 40 }}>
                        <Image source={require('../../assets/images/locked.png')} style={{ width: 20, height: 25 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <BaseInput style={styles.inputBox}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: '40%' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('FootballTeam')}
                    >
                        <BaseText style={styles.buttonText} bold={true}>Đăng nhập</BaseText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        <BaseText style={styles.buttonText1} bold={true} >Đăng ký</BaseText>

                    </TouchableOpacity>
                </View>

                <View style={styles.Signin}>
                    <BaseText style={{ color: '#006BEE', fontSize: 13, marginTop: '3%' }}>Quên mật khẩu</BaseText>
                    <BaseText style={{ color: '#006BEE', fontSize: 15, marginTop: '7%' }} bold={true}>Đăng nhập bằng</BaseText>
                </View>
                
                <View style={{ flexDirection: 'row', marginBottom: '15%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: 50, height: 50, borderRadius: 25, borderColor: '#006BEE', borderWidth: 1, justifyContent: "center", alignItems: 'center', marginRight: 10 }}>
                            <Image source={require('../../assets/images/facebook.png')} style={{ width: 20, height: 20 }} resizeMode="contain"/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: 50, height: 50, borderRadius: 25, borderColor: '#006BEE', borderWidth: 1, justifyContent: "center", alignItems: 'center', marginRight: 10, left: 10 }}>
                            <Image source={require('../../assets/images/google.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    layout: {
        flexDirection: 'row',
        top: '40%'
    },
    inputBox: {
        width: '85%',
    },
    button: {
        width: 280,
        backgroundColor: '#0072FB',
        borderRadius: 25,
        marginVertical: 6,
        paddingVertical: 5,
       marginTop: '10%',
    },
    button1: {
        width: 280,
        borderRadius: 25,
        marginVertical: 6,
        paddingVertical: 5,
        borderColor: '#0072FB',
        borderWidth: 1,
        marginTop: '2%',
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center', 
    },
    buttonText1: {
        fontSize: 16,
        color: '#0072FB',
        textAlign: 'center',
    },
    Signin: {
       marginBottom: '17%',
        alignItems: 'center',
    }
})
