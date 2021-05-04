import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput } from 'react-native';

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displaytext: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'pocket dictionary',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ displaytext: this.state.text });
          }}>
          <Text> GO </Text>
        </TouchableOpacity>
        <Text>{this.state.displaytext}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 125,
    width: 200,
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    marginLeft: 80,
  },
  goButton: {
    width: 50,
    height: 50,
  },
});
