import React from "react";
import auth from '@react-native-firebase/auth';
import { SafeAreaView, StyleSheet, View } from "react-native";
import SignIn from './screens/SignIn';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/SignUp";
import Voice from "./screens/Voice";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator(); 


function App() : JSX.Element {
  const User = auth().currentUser;
  

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={User ? 'Inside' : 'SignIn'}>
        {User ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ):(
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
        
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const insideStack = createNativeStackNavigator();

const InsideLayout = () => {
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen  name="voice" component={Voice}/>
    </InsideStack.Navigator>
  )
}

export default App;


const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
})