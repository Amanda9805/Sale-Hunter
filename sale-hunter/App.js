import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Card from './components/card';
import { images } from './src/imageImports';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.grid}>
          {images.map((image, index) => (
            <Card key={index} title={`Card ${index + 1}`} image={image} />
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
