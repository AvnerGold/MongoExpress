import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function RegisterCard() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    // Perform registration logic here
    let user = { name, password, date, city, age, email };
    console.log(name);

    try {
        let res =  await fetch('/api/users/register', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, password, date, city, age, email
            }),
          });

      let data = await res.json();
      // Handle the response accordingly
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }

    // Reset the fields
    setName('');
    setPassword('');
    setDate('');
    setCity('');
    setAge('');
    setEmail('');
  };

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
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
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
