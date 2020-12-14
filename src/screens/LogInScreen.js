import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import userService from '../services/userService';
import { useUserContext } from '../hooks/useUserContext';

function LogInScreen({ navigation }) {
  const [formEmail, setFormEmail ] = useState();
  const [formPassword, setFormPassword ] = useState();
  const [loading, setLoading] = useState(false);
  const {handleSignupOrLogin} = useUserContext();

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      await userService.login({'email': formEmail, 'pw': formPassword});
      console.log("YES!");
      handleSignupOrLogin();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  const isFormInvalid = () => {
    return !(formEmail && formPassword);
}
  
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
    </View>
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => setFormEmail(text)}
          value={formEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setFormPassword(text)}
          value={formPassword}
          secureTextEntry
        />
    </View>
    <Button
        title="Login"
        disabled={isFormInvalid() || loading}
        onPress={handleSubmit}
    />
    <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
    />
  </ScrollView>
  );
  }

  export default LogInScreen;

  const styles = StyleSheet.create({
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10
    }
  });