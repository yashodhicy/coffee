import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Details = () => {
  const {params} = useRoute();
  const coffeeDetails = params?.coffee;
  console.log(coffeeDetails);
  return (
    <View style={styles.details}>
      <View style={styles.imageContainer}>
        <Image source={{uri: coffeeDetails.image}} style={styles.cofImage} />
        <View style={styles.ingredients}>
          <Text style={styles.title}>{coffeeDetails.title}</Text>
          {coffeeDetails.ingredients.map(ingre => (
            <Text style={styles.ingredient}> {ingre} </Text>
          ))}
        </View>
      </View>
      <View>
        <Text style={styles.title}>description</Text>
        <Text style={styles.descript}>{coffeeDetails.description}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  details: {
    height: '100%',
    width: '100%',
    padding: 10,
    gap: 20,
    backgroundColor: '#0c0f14',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: 'white',
  },
  imageContainer: {
    height: '60%',
  },
  cofImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },

  descript: {
    color: 'white',
    fontSize: 16,
  },
  ingredients: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#141921',
    opacity: 0.6,
    zIndex: 2,
    borderRadius: 20,
    flexDirection: 'row',
  },
  ingredient: {
    color: 'white',
  },
});
