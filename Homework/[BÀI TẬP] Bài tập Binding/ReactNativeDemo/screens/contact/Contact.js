import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import styles from './styles/styles';

export default class Contact extends Component {
  datas = [
    {
      title: 'Bill Gates',
      desc: 'Microsoft Company',
      image: require('../../assets/asset_contact/billgates.jpeg'),
    },
    {
      title: 'Elon musk',
      desc: 'Tesla Company',
      image: require('../../assets/asset_contact/elon_musk.jpeg'),
    },
    {
      title: 'Jeff Bezos',
      desc: 'Amazon Company',
      image: require('../../assets/asset_contact/jeff.jpeg'),
    },
    {
      title: 'Joe Belfiore',
      desc: 'Microsoft Company',
      image: require('../../assets/asset_contact/joe_belfiore.webp'),
    },
    {
      title: 'Joe Biden',
      desc: 'President American',
      image: require('../../assets/asset_contact/joe_biden.jpeg'),
    },
    {
      title: 'Mark Zuckerberg',
      desc: 'Microsoft Company',
      image: require('../../assets/asset_contact/mark.jpeg'),
    },
    {
      title: 'Vladimir Putin',
      desc: 'President Russia',
      image: require('../../assets/asset_contact/putin.jpeg'),
    },
  ];

  _renderHeader = () => {
    <View style={styles.header}>
      <Image />
      <Text></Text>
      <Image />
    </View>;
  };

  _renderContactList = () => {};
  render() {
    return <View>{this._renderHeader}</View>;
  }
}
