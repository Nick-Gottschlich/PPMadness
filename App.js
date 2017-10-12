// NPM
import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

// Local
import PartyParrot from './components/PartyParrot/partyParrot';

export default class App extends React.Component {
  _onPress() {
    Alert.alert('you did the thing');
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this._onPress}>
            <PartyParrot />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
