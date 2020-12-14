## React Native Auth Template

Template that provides Sign Up, Log In and Log Out functions to a blank mobile app.

### Technical Details

- Created with [Expo](https://expo.io/).
- Back-End provided by Ben Manley and David Stinson @ [MERN JWT Template](https://github.com/mongoose-airlines/jwt-auth-template).
- base64 String decoding done with [Buffer](https://www.npmjs.com/package/buffer) instead of atob.
- LocalStorage replaced with [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage).
- Navigation done with [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native).

### Native Vs. MERN Stack Main Differences

Besides having to use different packages compatible with React Native as mentioned above, the main differences with the original MERN Auth template are: 

- [React Native Components](https://reactnative.dev/docs/components-and-apis) are not the same as React and HTML components so the front end components had to be heavily refactored.
- CSS is incorporated differently in React Native. CSS rules are added using React Native [Stylesheets](https://reactnative.dev/docs/stylesheet)
- Testing with Expo can be done directly on your mobile device by:
  - downloading Expo's [app](https://apps.apple.com/app/apple-store/id982107779)
  - launching your front-end server with **npm start**
  - scanning the QR code provided with your mobile device
  - Finally, this means the front-end can't communicate with the back using localhost anymore. If you have a mac, you can change "localhost:3001" with "*your_user*.local:3001".

### Instructions

- Download Expo's [app](https://apps.apple.com/app/apple-store/id982107779).
- Fork and clone this repository.
- Run "rm -rf .git" on your terminal inside the project directory.
- Re-Initialize Git with "git init".
- Add a .env file with a SECRET value.
- Change the BASE_URL on the userService.js file with your computer's name.
- Run Back-end and Front-end servers.
- Scan QR code provided by Expo qith your mobile device.