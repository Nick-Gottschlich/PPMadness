// NPM
import React from 'react';
import { Image, Text } from 'react-native';

export default class PartyParrot extends React.Component {
  render() {
    const PARROTS = {
      parrot1: require('../../assets/Parrots/1.gif'),
      parrot2: require('../../assets/Parrots/2.gif'),
    }

    // const randomNum = Math.floor(Math.random() * 81);

    return (
      <Image source={PARROTS['parrot2']} />
    )
  }
}
