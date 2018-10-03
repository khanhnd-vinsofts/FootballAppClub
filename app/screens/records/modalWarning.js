import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

export default class ModalWarning extends Component {
    showAddModal = () => {
        this.refs.myModal.open();
    }
    render() {
        return (
            <Modal
            ref={'myModal'}
                style={styles.container}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert('khanh duy');
                }}
            >
                <Text>kshdjsdjkshdksdhhsd</Text>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: 3,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 280,
    }
})