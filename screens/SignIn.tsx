import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View , Text, Alert} from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SignIn =() => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
  
  const navigation = useNavigation();
  
  const handleSignIn = async () => {
    if(!email || !password) {
        Alert.alert("Please enter your email and password.");
        return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log("Signing in");
    } catch (err) {
      Alert.alert("signIn failed" , JSON.stringify(err));
    }
  }
  
  const handleSignUp = async() => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)} style={styles.input}></TextInput>
      <TextInput placeholder='password' value={password} onChangeText={(text)=>setPassword(text)} style={styles.input} secureTextEntry={true}></TextInput>
      <TouchableOpacity>
        <Text onPress={handleSignIn}>Sign In</Text>
        <Text onPress={handleSignUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn;

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

