import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import BaseText from '../../components/baseText';

export default class DetailTournamentScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{flex: 1}}>
                        <TouchableHighlight
                            style={{ width: 20, height: 20, marginLeft: 20, marginTop: 15 }}
                            underlayColor='transparent'
                            onPress={() => this.props.navigation.navigate('Tournament')}
                        >
                            <Image source={require('../../assets/images/close.png')} style={{ width: 12, height: 12, tintColor: '#0072FB' }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{flex: 5,alignItems: 'center', marginRight: 50, marginTop: 11 }}>
                        <BaseText style={{fontSize: 20, color: '#222222'}} bold>Giải đấu trẻ Nam Định</BaseText>
                    </View>
                </View>
                <View style={{flex: 1,marginTop: 30, marginLeft: 20, }}>
                    <BaseText style={{color: '#0072FB', fontSize: 16.3}} bold>
                        Giải đấu trẻ Nam Định là một giải đấu trẻ được diễn ra từ ngày 20/9
                        đến ngày 30/9 với sự tham gia của 20 đội bóng đến từ khắp các tỉnh Nam Định.
                    </BaseText>
                    <BaseText style={{color: '#0072FB', fontSize: 16.3, marginTop: 15}} bold>
                        Thể thức thi đấu vòng tròn, các đội sẽ thi đấu với nhau, đội có số 
                        điểm cao hơn dành chức vô địch.
                    </BaseText>
                    <BaseText style={{color: '#0072FB', fontSize: 16.3, marginTop: 15}} bold>
                        Độ tuổi tham dự giải đấu từ 18 - 20 tuổi.
                    </BaseText>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => this.props.navigation.navigate('RegisterTournament')}
                    >
                    <BaseText style={{fontSize: 20, color: '#0072FB', marginBottom: 20, fontWeight: '500'}} bold>Đăng ký tham gia</BaseText>
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
