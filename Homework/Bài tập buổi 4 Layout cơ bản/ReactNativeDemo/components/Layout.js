import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.box_purple]}>
        <Text style={styles.box__text}>Purple: #C9C9FF</Text>
      </View>
      <View style={[styles.box, styles.box_blue]}>
        <Text style={styles.box__text}>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.box, styles.box_green]}>
        <Text style={styles.box__text}>Green: #96CC96</Text>
      </View>
      <View style={[styles.box, styles.box_yellow]}>
        <Text style={styles.box__text}>Yellow: #F4B940</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  box: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  box__text: {
    textAlign: 'center',
    paddingtop: 30,
    fontWeight: 'bold',
  },
  box_purple: {backgroundColor: '#C9C9FF'},
  box_blue: {backgroundColor: '#3D85C6'},
  box_green: {backgroundColor: '#96CC96'},
  box_yellow: {backgroundColor: '#F4B940'},
});

export default Layout;
