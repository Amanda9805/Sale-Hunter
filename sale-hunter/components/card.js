// components/Card.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 5,
    width: '18%', // Adjust width to fit 5 cards per row with margin
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100, // Fixed height for image
  },
  title: {
    padding: 10,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default Card;
