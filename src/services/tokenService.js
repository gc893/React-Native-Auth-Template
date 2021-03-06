import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';

function setToken(token) {
    if (token) {
        AsyncStorage.setItem('token', token).catch(e => console.log(e));
    } else {
        AsyncStorage.removeItem('token').catch(e => console.log(e));
    } 
  }
  
async function getUserFromToken () {
  const token = await getToken();
  return token ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('ascii')).user : null;
}

async function getToken() {
    try {
        let token = await AsyncStorage.getItem('token');
        if (token) {
            const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('ascii'));
            if (payload.exp < Date.now() / 1000) {
                AsyncStorage.removeItem('token').catch(e => console.log(e));
            token = null;
            }
            return token;
        }
    } catch (e) {
        console.log(e);
    }
}

function removeToken() {
    AsyncStorage.removeItem('token').catch(e => console.log(e));
}

export default {
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
  };