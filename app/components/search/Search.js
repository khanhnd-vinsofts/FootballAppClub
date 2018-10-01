import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ListView } from 'react-native';
import Data from '../../screens/footballTeams/listFootballTeam';

export default class SearchScreen extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        state = {
            dataSource: ds.cloneWithRows(Data),
        }
    }

    filterSearch = (text) => {
        const newData = Data.filter(function(item){
            const itemData = item.name.toUpperCase()
            const textData = toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
      }
  render() {
    return (
      <View>
        <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.filterSearch(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     textInput: {
         width: '90%',
         height: 30,
         borderWidth: 1,
         borderColor: '#cecece',
         top: 10,
         marginHorizontal: 10,
     }
})