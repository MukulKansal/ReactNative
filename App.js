//npm install native-base react-navigation firebase
// firebase for authentication , native-base for styling & CSS part 

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './screens/SignupScreen';
import LoadingScreen from './screens/LoadingScreen';
import SigninScreen from './screens/SigninScreen';
import HomeScreen from './screens/HomeScreen';

const firebaseConfig = {
  apiKey: "AIzaSyBOF8ekkhy3hvSvonl3alg-12fbRu9Ojus",
  authDomain: "reactbootcamp-66eaa.firebaseapp.com",
  databaseURL: "https://reactbootcamp-66eaa.firebaseio.com",
  projectId: "reactbootcamp-66eaa",
  storageBucket: "reactbootcamp-66eaa.appspot.com",
  messagingSenderId: "690887084925",
  appId: "1:690887084925:web:a752f389def9da82f1da14",
  measurementId: "G-VFLXBHCFNB"
};

firebase.initializeApp(firebaseConfig)


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Load Screen" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={SigninScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
