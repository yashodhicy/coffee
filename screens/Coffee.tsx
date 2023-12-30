import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CoffeeItem {
  image: string,
  title: string,
  description: string,
} 
const Coffee = () => { 
  const [coffeelist, setCoffeelist] = useState<CoffeeItem[]>([]);
  const navigation = useNavigation();
  
  useEffect(()=>{
      getCoffee();
  },[])

  const getCoffee = async() => {
    try{
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const coffee: CoffeeItem[] = await response.json();
      console.log(coffee);
      setCoffeelist(coffee);
    }
    catch(err){
      console.log(err)
    }
      
  }

  const details = (coffee: CoffeeItem) => {
      navigation.navigate('Details', { coffee });
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
      coffeelist.map((cof, index) => (
        <View key={index} style={styles.cofContainer}>
          <Image source={{ uri: cof?.image }}  style ={ styles.cofImage }/>
          <Text style= {styles.name}>{cof?.title}</Text>
          <TouchableOpacity><Text style= {styles.details} onPress={() => details(cof)}>Details</Text></TouchableOpacity>
        </View>
      ))}

    </ScrollView>
  )
}

export default Coffee;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal:4,
    backgroundColor: '#0c0f14'
    
  },

  cofContainer: {
    backgroundColor: '#252A32',
    alignItems: 'center',
    width:'48%',
    margin:4,
    padding:10,
    gap:4,
    borderRadius:10,
    color: 'white'
 
  },

  cofImage: {
    width:160,
    height:160
  },

  name: {
    color: 'white'
  },

  details: {
    backgroundColor:'brown',
    padding:4,
    borderRadius:5,
    color:"white"
  },

})