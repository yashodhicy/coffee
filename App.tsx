import React, {useEffect, useState} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import SignIn from './screens/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import Coffee from './screens/Coffee';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(newUser => {
      setUser(newUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'Inside' : 'SignIn'}
        screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const InsideStack = createNativeStackNavigator();
const InsideLayout = () => {
  const HandleSignOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
        name="Coffee"
        component={Coffee}
        options={{
          headerTintColor: 'white',
          statusBarColor: '#0c0f14',
          headerStyle: {
            backgroundColor: '#0c0f14',
          },

          headerRight: () => (
            <TouchableOpacity onPress={HandleSignOut}>
              <Text style={styles.signout}>Sign Out</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <InsideStack.Screen name='Details' 
      component={Details}
      options={{
        headerTintColor: 'white',
        statusBarColor: '#0c0f14',
        headerStyle: {
          backgroundColor: '#0c0f14',
        },

        headerRight: () => (
          <TouchableOpacity onPress={HandleSignOut}>
            <Text style={styles.signout}>Sign Out</Text>
          </TouchableOpacity>
        ),
      }}
      />
    </InsideStack.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: '#0c0f14',
  },
  signout: {
    color: 'white',
  },
});
