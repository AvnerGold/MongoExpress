import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LoginCard from '../component/LoginCard';



export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <LoginCard/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  