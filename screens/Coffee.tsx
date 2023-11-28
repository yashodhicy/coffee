import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';

const Coffee = () => { 
  const [coffeelist, setCoffeelist] = useState([]);
  
  useEffect(()=>{
      getCoffee();
  },[])

  const getCoffee = async() => {
    try{
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const coffee = await response.json();
      setCoffeelist(coffee);
    }
    catch(err){
      console.log(err)
    }
      
  }

  return (
    <View style={styles.container}>
      {
      coffeelist.map((cof, index) => (
        <View key={index} style={styles.cofContainer}>
          <Image source={{ uri: cof?.image }}  style ={ styles.cofImage }/>
          <Text style= {styles.name}>{cof?.title}</Text>
        </View>
      ))}

    </View>
  )
}

export default Coffee;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal:4,
    backgroundColor: 'black'
    
  },

  cofContainer: {
    backgroundColor: '#252A32',
    alignItems: 'center',
    width:'48%',
    margin:4,
    padding:10,
    gap:4,
    borderRadius:10,
    Color: 'white'
 
  },

  cofImage: {
    width:160,
    height:160
  },

  name: {
    color: 'white'
  }
})