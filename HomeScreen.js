//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// The home screen contains the text “You are on the home page” and a button.
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home page</Text>
        <Button 
            style={styles.button}
            title="CIT 111 11:30AM"
            onPress={() => this.props.navigation.navigate('CIT_111_1')}
        />
        <Text> </Text>
        <Button 
            style={styles.button}
            title="CIT 111 12:45PM"
            onPress={() => this.props.navigation.navigate('CIT_111_2')}
        />
        {/* add whitespace */}
        <Text> </Text>
        <Button
            style={styles.button}
            title="CIT 111 9AM"
            onPress={() => this.props.navigation.navigate('CIT_111_3')}
        />
        <Text> </Text>
        <Button
            style={styles.button}
            title="CIT 111 8AM"
            onPress={() => this.props.navigation.navigate('CIT_111_4')}
        />
        <Text> </Text>
        <Button
            style={styles.button}
            title="CIT 111 2PM"
            onPress={() => this.props.navigation.navigate('CIT_111_5')}
        />
        <Text> </Text>
        <Button
            style={styles.button}
            title="WDD 130 10:15AM"
            onPress={() => this.props.navigation.navigate('WDD_130_1')}
        />
        {/* // Button has two props i.e title and onPress */}
        {/* // On onPress, we are calling the navigate function on this.props.navigation. */}
        {/* //As our HomeScreen is included in the stack.navigator so this.props.navigation will inherit props from the navigation object. */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
      },
      button: {
        padding: 10,
        margin: 10,
      },
  });

export default HomeScreen;