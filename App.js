import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LinkPatientScreen from './screens/LinkPatientScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="start" screenOptions={{ headerShown: true }}>
  <Stack.Screen
    name="start"
    component={StartScreen}
    options={{ headerShown: false }}
  />
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Register" component={RegisterScreen} />
  <Stack.Screen name="LinkPatient" component={LinkPatientScreen} />
  <Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>

    </NavigationContainer>
  );
}
