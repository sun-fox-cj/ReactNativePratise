/* @flow */
'use strict';

var React = require('react-native');
var CalendarManager = require('react-native').NativeModules.CalendarManager;
var { DeviceEventEmitter } = require('react-native');

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

/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

var subscription = "";

var SimpleClass = React.createClass({

// var subscription = ""

// componentWillMount: function(){
//     subscription = NativeAppEventEmitter.addListener(
//             'EventReminder',
//             (reminder) => {
//                 console.log('123456');
//         });
//   },
//   componentWillUnmount: function() {

//   	
//   },

componentWillMount: function() {
	var subscription = DeviceEventEmitter.addListener( //DeviceEventEmitter
    'EventReminder',
    (reminder) => console.log(reminder.name)
);
},

componentWillUnmount: function() {
	subscription.remove
},

onSearchPressed() {
		
	},

  render: function() {
    return (
      <View>
				<TouchableHighlight 
            style={styles.button}
            underlayColor='#99d9f4'
            onPress={this.onSearchPressed.bind(this)}
            >
          <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
			</View>
    );
  }
});


var styles = StyleSheet.create({
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
});


React.AppRegistry.registerComponent('EventTouch', () => SimpleClass);

