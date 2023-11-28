import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Details = () => {
  const { params } = useRoute();
  const coffeeDetails = params?.coffee
  return (
    <View style = {styles.details}>
        
        <Text style= {styles.title}>{coffeeDetails.title}</Text>
      <Image source={{uri: coffeeDetails.image}} style={styles.cofImage}  />
      <Text style= { styles.descript}>{coffeeDetails.ingredients}</Text>
      <Text style= { styles.descript}>{coffeeDetails.description}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    title: {
      fontSize: 22,
      fontWeight: '900',
      color: 'white'
    },
    cofImage: {
        width:'100%',
        height:'50%'
    },
    details: {
        height:'100%',
        width:'100%',
        alignItems: 'center',
        padding:10,
        gap:10,
        backgroundColor: '#0c0f14'
    },
    descript: {
        color: 'white',
        fontSize: 16
    }
})