import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Emoji extends Component {
  state = {selected: require('../../assets/emoji/love.png')};

  datas = [
    require('../../assets/emoji/angry.png'),
    require('../../assets/emoji/wink.png'),
    require('../../assets/emoji/love.png'),
    require('../../assets/emoji/fearful.png'),
    require('../../assets/emoji/sleep.png'),
  ];

  onPressEmoji = data => {
    this.setState({selected: data});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bạn đang cảm thấy như thế nào ?</Text>
        <Image style={styles.render_image} source={this.state.selected} />
        <View style={styles.emoji}>
          {this.datas.map((data, index) => (
            <TouchableOpacity onPress={() => this.onPressEmoji(data)}>
              <Image style={styles.icon} source={data} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {width: 36, height: 36},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  render_image: {
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
  },
});
