import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [name, setName] = useState("")

    const navigation = useNavigation();

    const handleSignUp = async() => {
        if(!email || !password) {
            Alert.alert("Please enter your email and password.");
            return;
        }
    
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            console.log("signing up");
        } catch (err) {
            Alert.alert("Signup failed", JSON.stringify(err));
        }
    }

    const handleSignIn = () => {
      navigation.navigate('SignIn');
    }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Name' value={name} onChangeText={(text)=>setName(text)} style={styles.input}></TextInput>
      <TextInput placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)} style={styles.input}></TextInput>
      <TextInput placeholder='password' value={password} onChangeText={(text)=>setPassword(text)} style={styles.input} secureTextEntry={true}></TextInput>
      <TouchableOpacity>
        <Text onPress={handleSignUp}>Sign Up</Text>
        <Text onPress={handleSignIn}>Sign In</Text>  
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      height: '100%',
      padding: 10,
      borderWidth: 2,
      gap: 20,
    },
    input: {
      height: 60,
      borderWidth: 2,
      padding: 10,
      borderRadius: 10,
    },
});