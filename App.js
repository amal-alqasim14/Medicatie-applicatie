import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Zorg dat jouw logo in deze map zit
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welkom bij de Medicatie App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9F4F0',
    color: '#2C6E75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
