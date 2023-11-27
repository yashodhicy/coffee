import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'

const Voice = () => {
  
  const HandleSignOut = async() => {
    try {
        await auth().signOut();
      } catch (error) {
        console.error("Error signing out:", error);
      }
  }

  return (
    <View>
      <Text>Voice</Text>
      <TouchableOpacity onPress={HandleSignOut}><Text>Sign Out</Text></TouchableOpacity>
    </View>
  )
}

export default Voice

const styles = StyleSheet.create({})