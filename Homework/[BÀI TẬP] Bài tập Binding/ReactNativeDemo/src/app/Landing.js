/* eslint-disable prettier/prettier */
import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';

export default function Landing() {
  return (
    <View>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Password" />
      <Button title="Press me" />
      {/* <View> */}
      <Text>Don't have an account?</Text>
      <Text>Sign up</Text>
      {/* </View> */}
    </View>
  );
}
