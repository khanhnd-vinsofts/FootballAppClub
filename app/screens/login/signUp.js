import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Fonts } from '../../assets/Fonts';
import BaseText from '../../components/baseText';
import BaseInput from '../../components/baseInput';

export default class SignUp extends Component {
    static navigationOptions = {
        header: null,
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: 400, height: 200, backgroundColor: '#006BEE' }}>
                    <View style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 1, backgroundColor: '#2B8CFC', borderColor: '#ffffff', borderStyle: 'dashed', top: 100, left: 40 }}></View>
                </View>
                <View style={styles.layout}>
                    <View >
                        <BaseText style={styles.textInfo} bold={true}>Thông tin cơ bản</BaseText>
                    </View>
                    <View >
                        <BaseInput
                             placeholder="Fullname"
                        />
                        <BaseInput
                             placeholder="Email"
                        />
                    </View>

                </View>

                <View style={styles.layout}>
                    <View style={{ top: 30 }}>
                        <BaseText style={styles.textInfo} bold={true}>Thông tin riêng tư</BaseText>
                    </View>
                    <View style={{ flexDirection: 'column', top: 30 }}>
                        <BaseInput
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <BaseInput
                             placeholder="Email"
                        />
                    </View>

                </View>
                <View style={{ flex: 1, justifyContent: 'center', left: 5 }}>
                    <TouchableOpacity style={styles.button}>
                        <BaseText style={styles.buttonText} bold={true}>Đăng ký</BaseText>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignUp}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <BaseText style={{ color: '#006BEE', fontSize: 12, fontFamily: Fonts.DisplayThin }}>Tôi đã có tài khoản</BaseText>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    layout: {
        flexDirection: 'column',
        top: 30
    },
    textInfo: {
        color: '#006BEE',
    },
    button: {
        width: 300,
        backgroundColor: '#006BEE',
        borderRadius: 25,
        marginVertical: 5,
        paddingVertical: 8,
        top: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center'
    },
    SignUp: {
        bottom: 50,
        alignItems: 'center',
    }
})

