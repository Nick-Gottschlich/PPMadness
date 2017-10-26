// NPM
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';

// Local
import PartyParrot from './components/PartyParrot/partyParrot';

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      locationX: 0,
      locationY: 0,
    };

    this._renderParrot = this._renderParrot.bind(this);
    this._handlePress = this._handlePress.bind(this);
  }

  _renderParrot() {
    return (
      <PartyParrot />
    )
  }

  _handlePress(evt) {

    this.setState({
       locationX: evt.nativeEvent.locationX,
       locationY: evt.nativeEvent.locationY,
    });

    this._renderParrot();
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={(evt) => this._handlePress(evt)}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.container}>
          <PartyParrot
            locationX={this.state.locationX}
            locationY={this.state.locationY} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
