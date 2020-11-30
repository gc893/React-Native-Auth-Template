import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Gaby')

  const clickHandler = () => {
    if (name === 'Gaby') {
      setName('Gaby Cabrera');
    } else {
      setName('Gaby');
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        My name is {name}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='Click Me' onPress={clickHandler}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
