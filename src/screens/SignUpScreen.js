import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import { useUserContext } from '../hooks/useUserContext';
import userService from '../services/userService'

function SignUpScreen() {
    const [formUser, setFormUser ] = useState();
    const [formEmail, setFormEmail ] = useState();
    const [formPassword, setFormPassword ] = useState();
    const [formPasswordConf, setFormPasswordConf ] = useState();
    const [loading, setLoading] = useState(false);
    const {handleSignupOrLogin} = useUserContext();

    const handleSubmit = async (e) => {
        try {
          setLoading(true);
          await userService.signup({'name': formUser, 'email': formEmail, 'password': formPassword, 'passwordConf': formPasswordConf});
          console.log("YES!");
          handleSignupOrLogin();
        } catch (err) {
          console.log(err);
        } finally {
            setLoading(false);
        }
      }
    
    const isFormInvalid = () => {
        return !(formUser && formEmail && formPassword && formPassword === formPasswordConf);
    }

    return (
        <>
            <StatusBar style="auto" />
            <ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="First and Last Name"
                    onChangeText={(text) => setFormUser(text)}
                    value={formUser}
                />
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
                <TextInput
                    style={styles.textInput}
                    placeholder="Repeat Password"
                    onChangeText={(text) => setFormPasswordConf(text)}
                    value={formPasswordConf}
                    secureTextEntry
                />
                <Button
                    title="Submit"
                    onPress={handleSubmit}
                    disabled={isFormInvalid() || loading}
                />
            </View>
            </ScrollView>
        </>
    );
  }

  export default SignUpScreen;

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