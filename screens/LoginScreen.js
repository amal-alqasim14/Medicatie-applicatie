import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Fout', 'Vul alle velden in');
        } else {
            Alert.alert('Succes', `Welkom ${email}`);
            navigation.navigate('Home');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>Inloggen</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Wachtwoord"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

               <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Inloggen</Text>

        </TouchableOpacity> 
        </ScrollView>
        </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
            );
}

            const styles = StyleSheet.create({
                container: {
                flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#A5DDEA',
            flexGrow: 1,

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
            marginBottom: 40,
            textAlign: 'center',
    },
            input: {
                backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
            fontSize: 16,
            width: '100%',
    },
            button: {
                backgroundColor: '#27ae60',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
    },
            buttonText: {
                color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
    },
});
