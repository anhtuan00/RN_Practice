import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Start */}
      <View style={styles.header}>
        <Text style={styles.header__title}>Register Now</Text>
      </View>
      {/* Header End */}

      {/* Body Start */}
      <View style={styles.body}>
        <View>
          <View>
            {/* Column */}
            <View style={styles.containerInput}>
              <Text>Email</Text>
              {/* Row */}
              <View style={styles.containerInput__input}>
                <Image
                  source={require('../assets/images/email.png')}
                  style={styles.containerInput__img}
                />
                <TextInput
                  editable
                  maxLength={40}
                  keyboardType="default"
                  placeholder="Enter your email address"></TextInput>
              </View>
            </View>
            {/* Column */}
            <View style={styles.containerInput}>
              <Text>Password</Text>
              {/* Row */}
              <View style={styles.containerInput__input}>
                <Image
                  source={require('../assets/images/password.png')}
                  style={styles.containerInput__img}
                />
                <TextInput
                  editable
                  maxLength={40}
                  keyboardType="default"
                  placeholder="Enter your password"></TextInput>
              </View>
            </View>
          </View>
          <View>
            <View style={[styles.btn, styles.btn_primary]}>
              <Text style={styles.btn__text}>Sign In</Text>
            </View>
            <View style={[styles.btn, styles.btn_secondary]}>
              <Text style={styles.btn__text}>Sign Up</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Body End */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 30,
    paddingBottom: 30,
  },
  // mot gach cho element, 2 gach cho modify => xem quy uoc BEM
  header__title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  body: {
    flex: 3,
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  containerInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginTop: 16,
  },
  containerInput__img: {
    width: 24,
    height: 24,
  },
  containerInput__input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInput__input_textInput: {
    flex: 1,
    padding: 8,
  },
  btn: {
    height: 42,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 18,
  },
  btn_primary: {
    backgroundColor: '#009387',
  },
  btn_secondary: {
    borderColor: '#009387',
    borderWidth: 1,
  },
  btn__text: {
    fontSize: 16,
  },
});

export default Login;
