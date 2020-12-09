import tokenService from './tokenService';
const BASE_URL = '/api/users/';

  // The old signup function (if Sam's way fails...)
// function signup(user) {
//   return fetch(BASE_URL + 'signup', {
//     method: 'POST',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify(user)
//   })
//   .then(res => {
//     if (res.ok) return res.json();
//     throw new Error('Email already taken!');
//   })
//   // Parameter destructuring!
//   .then(({ token }) => {
//     tokenService.setToken(token);
//   });
//   // the above could have been written as
//   //.then((token) => token.token);
// }

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err}`)
  })
  .then(({ token }) => {
    tokenService.setToken(token);
  })
}

async function getUser() {
  return await tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  signup,
  getUser,
  logout,
  login
};