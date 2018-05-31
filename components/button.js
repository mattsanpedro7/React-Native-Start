import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            Alert.alert('You tapped that button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}