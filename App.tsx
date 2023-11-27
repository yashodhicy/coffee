import React from "react";
import auth from '@react-native-firebase/auth';
import { SafeAreaView, StyleSheet, View } from "react-native";
import SignIn from './screens/SignIn';

function App() : JSX.Element {
  const user = auth().currentUser
  return (
    <SafeAreaView style={styles.appcontainer}>
      <SignIn />
    </SafeAreaView>
  )
}

export default App;


const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
})