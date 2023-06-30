import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';


   
   
export default function LoginCard() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Perform login logic here
        setName(name);
        setPassword(password);
        let user = { name, password };
      
        try {//try
          let res = await fetch('http://localhost:5500/api/users/login', {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(name, password),
        });
        
        // Handle the response accordingly
        console.log('Response:', res);
    } catch (error) {
            console.log("tata");
          console.error('Error:', error);
        }
      
        // console.log('Name:', name);
        // console.log('Password:', password);
        // Reset the fields
      };
      
      
      // Rest of the code remains the same
      
  
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Name"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Button title="Login" onPress={handleLogin} />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 16,
    },
    input: {
      width: '100%',
      height: 40,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      paddingHorizontal: 10,
    },
  });