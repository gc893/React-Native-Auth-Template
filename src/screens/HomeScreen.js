import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {useUserContext} from '../hooks/useUserContext'

function HomeScreen({navigation}) {
  const {user, handleLogOut} = useUserContext();
    return (
      <>
      <StatusBar style="auto" />
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {user?.name}</Text>
            <View style={styles.buttonContainer}>
            <Button
              title="Sign Out"
              onPress={() => handleLogOut()}
            />
          </View>
      </View>
    </ScrollView>
    </>
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