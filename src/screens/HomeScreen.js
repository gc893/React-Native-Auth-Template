import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';

function HomeScreen({route}) {
  const {name, setName} = route.params;

  const clickHandler = () => {
    if (name === 'Gaby') {
      setName('Gaby Cabrera');
    } else {
      setName('Gaby');
    }
  }

    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          My name is {name}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title='Click Me' onPress={clickHandler}/>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your name"
          maxLength={20}
        />
      </View>
    </ScrollView>
    );
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: { },
    buttonContainer: { },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    }
  });