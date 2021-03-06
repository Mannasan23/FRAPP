import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./screens/Home";
import Main from "./screens/Main";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*

{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/stack": "^6.2.1",
    "expo": "^41.0.0",
    "expo-camera": "~11.0.2",
    "expo-face-detector": "~10.0.1",
    "expo-permissions": "~12.0.1",
    "expo-status-bar": "~1.0.4",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-41.0.0.tar.gz",
    "react-native-gesture-handler": "^2.4.1",
    "react-native-reanimated": "^2.8.0",
    "react-native-responsive-fontsize": "^0.5.0",
    "react-native-safe-area-context": "^4.2.5",
    "react-native-screens": "^3.13.1",
    "react-native-web": "~0.13.12",
    "unimodules-permissions-interface": "^6.1.0"
  },
  "devDependencies": {
    "@babel/core": "^7.9.0"
  },
  "private": true
}



*/