import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LinkPatientScreen from './screens/LinkPatientScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: true }}>
  <Stack.Screen
    name="Start"
    component={StartScreen}
    options={{ headerShown: false }} // Geen header op de startpagina
  />
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Register" component={RegisterScreen} />
  <Stack.Screen name="LinkPatient" component={LinkPatientScreen} />
</Stack.Navigator>

    </NavigationContainer>
  );
}
