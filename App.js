// NPM
import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Text,
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
    // console.log('in renderParrot')

    return (
      <PartyParrot />
    )
  }

  _handlePress(evt) {
    // locationX = evt.nativeEvent.locationX;
    // locationY = evt.nativeEvent.locationY;

    this.setState({
       locationX: evt.nativeEvent.locationX,
       locationY: evt.nativeEvent.locationY,
    });

    this._renderParrot();
  }

  render() {
    return (
      // <TouchableOpacity onPress={this._onPress}>
      //   <View style={styles.container}>
      //     <PartyParrot />
      //   </View>
      // </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={(evt) => this._handlePress(evt)}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.container}>
          {console.log("locationX", this.state.locationX)}
          {console.log("locationY", this.state.locationY)}
          <View>
            <PartyParrot
              locationX={this.state.locationX}
              locationY={this.state.locationY} />
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // top: 75,
    // right: 200,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // parrot: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   top: this.state.locationX,
  //   right: this.state.locationY,
  // }
});
