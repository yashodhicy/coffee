import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Please enter your email and password.');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('signing up');
    } catch (err) {
      Alert.alert('Signup failed', JSON.stringify(err));
    }
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={require('../assets/coffeebeans.png')}
      // style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor={'#D17842'}
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}></TextInput>
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
          <Text style={styles.text} onPress={handleSignUp}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footertxt}>Have an account?</Text>
          <Text
            style={[styles.footertxt, styles.signin]}
            onPress={handleSignIn}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    borderWidth: 2,
    gap: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  signin: {
    borderRadius: 10,
    fontWeight: 600,
    backgroundColor: '#D17842',
  },
});
