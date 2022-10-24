import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Layout = () => {
  return (
    <SafeAreaView>
      <View style={[styles.box, styles.box_purple]}>
        <Text>Purple: #C9C9FF</Text>
      </View>
      <View style={[styles.box, styles.box_blue]}>
        <Text>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.box, styles.box_green]}>
        <Text>Green: #96CC96</Text>
      </View>
      <View style={[styles.box, styles.box_yellow]}>
        <Text>Yellow: #F4B940</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  box: {
    flex: 1,
  },
  box_purple: {backgroundColor: '#C9C9FF'},
  box_blue: {backgroundColor: '#3D85C6'},
  box_green: {backgroundColor: '#96CC96'},
  box_yellow: {backgroundColor: '#F4B940'},
});

export default Layout;
