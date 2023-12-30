import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Please enter your email and password.');
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Signing in');
    } catch (err) {
      Alert.alert('signIn failed', JSON.stringify(err));
    }
  };

  const handleSignUp = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('../assets/coffeebeans.png')}
      // style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'#D17842'}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="password"
          placeholderTextColor={'#D17842'}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}></TextInput>
        <TouchableOpacity>
          <Text style={styles.text} onPress={handleSignIn}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footertxt}>Don't have an account?</Text>
          <Text
            style={[styles.footertxt, styles.signup]}
            onPress={handleSignUp}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    borderWidth: 2,
    gap: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    position: 'absolute',
    top: 50,
    fontSize: 30,
    fontWeight: 'bold',
    flexDirection: 'row',
    color: 'white',
  },
  input: {
    height: 60,
    width: 320,
    borderWidth: 2,
    borderColor: '#D17842',
    padding: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#141921',
  },
  text: {
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#D17842',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  footertxt: {
    color: 'white',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  signup: {
    borderRadius: 10,
    fontWeight: 600,
    backgroundColor: '#D17842',
  },
});
