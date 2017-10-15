// NPM
import React from 'react';
import { Image, Text } from 'react-native';

export default class PartyParrot extends React.Component {
  render() {
    // thank god for python eh:
    // for i in range(1,84):
    //   print("parrot"+str(i)+": require('../../assets/Parrots/"+str(i)+".gif'),")
    //
    // you a real piece of work for this one react native
    // if you're wondering why I had to do this:
    //   https://github.com/facebook/react-native/issues/2481
    const PARROTS = {
      parrot1: require('../../assets/Parrots/1.gif'),
      parrot2: require('../../assets/Parrots/2.gif'),
      parrot3: require('../../assets/Parrots/3.gif'),
      parrot4: require('../../assets/Parrots/4.gif'),
      parrot5: require('../../assets/Parrots/5.gif'),
      parrot6: require('../../assets/Parrots/6.gif'),
      parrot7: require('../../assets/Parrots/7.gif'),
      parrot8: require('../../assets/Parrots/8.gif'),
      parrot9: require('../../assets/Parrots/9.gif'),
      parrot10: require('../../assets/Parrots/10.gif'),
      parrot11: require('../../assets/Parrots/11.gif'),
      parrot12: require('../../assets/Parrots/12.gif'),
      parrot13: require('../../assets/Parrots/13.gif'),
      parrot14: require('../../assets/Parrots/14.gif'),
      parrot15: require('../../assets/Parrots/15.gif'),
      parrot16: require('../../assets/Parrots/16.gif'),
      parrot17: require('../../assets/Parrots/17.gif'),
      parrot18: require('../../assets/Parrots/18.gif'),
      parrot19: require('../../assets/Parrots/19.gif'),
      parrot20: require('../../assets/Parrots/20.gif'),
      parrot21: require('../../assets/Parrots/21.gif'),
      parrot22: require('../../assets/Parrots/22.gif'),
      parrot23: require('../../assets/Parrots/23.gif'),
      parrot24: require('../../assets/Parrots/24.gif'),
      parrot25: require('../../assets/Parrots/25.gif'),
      parrot26: require('../../assets/Parrots/26.gif'),
      parrot27: require('../../assets/Parrots/27.gif'),
      parrot28: require('../../assets/Parrots/28.gif'),
      parrot29: require('../../assets/Parrots/29.gif'),
      parrot30: require('../../assets/Parrots/30.gif'),
      parrot31: require('../../assets/Parrots/31.gif'),
      parrot32: require('../../assets/Parrots/32.gif'),
      parrot33: require('../../assets/Parrots/33.gif'),
      parrot34: require('../../assets/Parrots/34.gif'),
      parrot35: require('../../assets/Parrots/35.gif'),
      parrot36: require('../../assets/Parrots/36.gif'),
      parrot37: require('../../assets/Parrots/37.gif'),
      parrot38: require('../../assets/Parrots/38.gif'),
      parrot39: require('../../assets/Parrots/39.gif'),
      parrot40: require('../../assets/Parrots/40.gif'),
      parrot41: require('../../assets/Parrots/41.gif'),
      parrot42: require('../../assets/Parrots/42.gif'),
      parrot43: require('../../assets/Parrots/43.gif'),
      parrot44: require('../../assets/Parrots/44.gif'),
      parrot45: require('../../assets/Parrots/45.gif'),
      parrot46: require('../../assets/Parrots/46.gif'),
      parrot47: require('../../assets/Parrots/47.gif'),
      parrot48: require('../../assets/Parrots/48.gif'),
      parrot49: require('../../assets/Parrots/49.gif'),
      parrot50: require('../../assets/Parrots/50.gif'),
      parrot51: require('../../assets/Parrots/51.gif'),
      parrot52: require('../../assets/Parrots/52.gif'),
      parrot53: require('../../assets/Parrots/53.gif'),
      parrot54: require('../../assets/Parrots/54.gif'),
      parrot55: require('../../assets/Parrots/55.gif'),
      parrot56: require('../../assets/Parrots/56.gif'),
      parrot57: require('../../assets/Parrots/57.gif'),
      parrot58: require('../../assets/Parrots/58.gif'),
      parrot59: require('../../assets/Parrots/59.gif'),
      parrot60: require('../../assets/Parrots/60.gif'),
      parrot61: require('../../assets/Parrots/61.gif'),
      parrot62: require('../../assets/Parrots/62.gif'),
      parrot63: require('../../assets/Parrots/63.gif'),
      parrot64: require('../../assets/Parrots/64.gif'),
      parrot65: require('../../assets/Parrots/65.gif'),
      parrot66: require('../../assets/Parrots/66.gif'),
      parrot67: require('../../assets/Parrots/67.gif'),
      parrot68: require('../../assets/Parrots/68.gif'),
      parrot69: require('../../assets/Parrots/69.gif'),
      parrot70: require('../../assets/Parrots/70.gif'),
      parrot71: require('../../assets/Parrots/71.gif'),
      parrot72: require('../../assets/Parrots/72.gif'),
      parrot73: require('../../assets/Parrots/73.gif'),
      parrot74: require('../../assets/Parrots/74.gif'),
      parrot75: require('../../assets/Parrots/75.gif'),
      parrot76: require('../../assets/Parrots/76.gif'),
      parrot77: require('../../assets/Parrots/77.gif'),
      parrot78: require('../../assets/Parrots/78.gif'),
      parrot79: require('../../assets/Parrots/79.gif'),
      parrot80: require('../../assets/Parrots/80.gif'),
      parrot81: require('../../assets/Parrots/81.gif'),
      parrot82: require('../../assets/Parrots/82.gif'),
      parrot83: require('../../assets/Parrots/83.gif'),
    }

    const randomNum = Math.floor(Math.random() * 83);

    return (
      <Image source={PARROTS[`parrot${randomNum}`]} />
    )
  }
}
