import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: Platform.OS == 'ios' ? 100 : 56,
    paddingTop: Platform.OS == 'ios' ? 64 : 0,
  },
});
