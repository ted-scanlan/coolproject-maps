import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Greeting extends Component {

  state = {
    name: "Ted",
    showName: false
  }
  render() {
    let name = this.state.showName ? this.state.name : "no name"
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
          <Text>{name}!</Text>
      </View>
    );
  }
}
