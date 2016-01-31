'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage')

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;
var styles = StyleSheet.create({
   text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class SimpleApp extends Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

class Hello extends Component {
  render() {
    return (
        <Text style={styles.text}>
          Hello
        </Text>
      )
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);