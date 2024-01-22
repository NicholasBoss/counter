import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components
import { Audio } from 'expo-av';

let my_button_sound = require('./assets/buttonpress.wav');
let soundObject = new Audio.Sound();
var load = false;
let playsound = async () => {
    // preload sound
    if (load === false) {
      await soundObject.loadAsync(my_button_sound);
      load = true;
      // Your sound is playing!
    } 
    await soundObject.replayAsync(my_button_sound);
  }

// About screen contains the text “You are on the about page” and a button.
class CIT_111_2 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        counter: 0,
        highnumber: 36,
        lownumber: 0,
        };
    }

    decreaseNumberby1 = () => {
        this.setState((prevState) => {
          // Check if the number is greater than 0 before decreasing it
          playsound();
          const newNumber = prevState.highnumber > 0 ? prevState.highnumber - 1 : 0;
          return { highnumber: newNumber < 0 ? 0 : newNumber, lownumber: prevState.lownumber + 1 > 36 ? 36 : prevState.lownumber + 1 };
        });
      };

    decreaseNumberby6 = () => {
        this.setState((prevState) => {
          // Check if the number is greater than 0 before decreasing it
          playsound();
          const newNumber = prevState.highnumber > 0 ? prevState.highnumber - 6 : 0;
          return { highnumber: newNumber < 0 ? 0 : newNumber, lownumber: prevState.lownumber + 6 > 36 ? 36 : prevState.lownumber + 6 };
        });
      };

      increaseNumberby1 = () => {
        this.setState((prevState) => {
          // Check if the number is greater than 0 before decreasing it
          playsound();
          const newNumber = prevState.lownumber > 0 ? prevState.lownumber - 1 : 0;
          return { lownumber: newNumber < 0 ? 0 : newNumber, highnumber: prevState.highnumber + 1 > 36 ? 36 : prevState.highnumber + 1 };
        });
      };

    increaseNumberby6 = () => {
        this.setState((prevState) => {
            // Check if the number is greater than 0 before decreasing it
            playsound();
            const newNumber = prevState.lownumber > 0 ? prevState.lownumber - 6 : 0;
            return { lownumber: newNumber < 0 ? 0 : newNumber, highnumber: prevState.highnumber + 6 > 36 ? 36 : prevState.highnumber + 6 };
            });
        };
  render() {
    return (
      <View style={styles.container}>
        <Text> CIT 111 - Brother Clark</Text>
        {/* Create high number (max number of students) and decrement when added. Don't let it go below 0*/}
        <Text>Students Absent: {this.state.highnumber}</Text>
        <Text>Students Here: {this.state.lownumber}</Text>
        <Text> </Text>
        {/* Disable button when high number is less than or equal to  0 */}
        <Button
            style={styles.button}
            title="Add 1"
            // onPress={() => this.setState({ lownumber: this.state.lownumber + 1})}
            onPress={this.decreaseNumberby1}
            disabled={this.state.highnumber <= 0}
            // when disabled, set high number to 0

        />
        <Text> </Text>
        <Button
            style={styles.button}
            title="Add 6"
            // onPress={() => this.setState({ lownumber: this.state.lownumber + 5, highnumber: this.state.highnumber - 6 })}
            onPress={this.decreaseNumberby6}
            disabled={this.state.highnumber <= 0}
        />
        <Text> </Text>
        {/* On button click decrement counter */}
        <Button
            style={styles.button}
            title="Subtract 1"
            // onPress={() => this.setState({ lownumber: this.state.lownumber - 1, highnumber: this.state.highnumber + 1 })}
            onPress={this.increaseNumberby1}
            disabled={this.state.lownumber <= 0}
        />
        <Text> </Text>
        <Button
            style={styles.button}
            title="Subtract 6"
            // onPress={() => this.setState({ lownumber: this.state.lownumber - 6, highnumber: this.state.highnumber + 5 })}
            onPress={this.increaseNumberby6}
            disabled={this.state.lownumber <= 0}
        />
        <Text> </Text>
        {/* Reset counter */}
        <Button
            style={styles.button}
            title="Reset Counter"
            onPress={() => this.setState({ highnumber: 36, lownumber: 0 })}
        />
        <Text> </Text>        
{/* // On button click, we will navigate to the home page. */}
        <Button
            style={styles.button}
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
        /> 
        {/* // Button has two props title and onPress. */}
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
    button: {
        padding: 10,
        margin: 10,
      },
  });

export default CIT_111_2;