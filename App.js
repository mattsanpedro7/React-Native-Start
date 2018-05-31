import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BananaImg from './components/bananaImg';
import BlinkApp from './components/blinkApp';
import FlexDirection from './components/flexDirection';
import AlignItems from './components/alignItems';
import PizzaTranslator from './components/pizzaTranslator';
import ButtonBasics from './components/button';

// use of props
class Greet extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      // <View style={{flex:1}}>
      <View>
        <BananaImg/>
        {/* <Greet name='Buy me bananas'/> */}
        {/* <BlinkApp/> */}
        {/* <View style={{width: 50, height: width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> */}
        {/* <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} /> */}
        {/* <FlexDirection/> */}
        {/* <AlignItems/> */}
        <PizzaTranslator/>
        <ButtonBasics/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // marginTop: '20px',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
