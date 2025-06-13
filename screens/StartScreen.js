import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welkom bij de Medicatie App</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Inloggen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Registreren</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LinkPatient')}>
        <Text style={styles.buttonText}>Koppelen met patiënt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5DDEA',
    color: '#2C6E75',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5AB59C',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 8,
  },
  buttonText: {
    color: '#2C6E75',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
