import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log('colors:', colors);

  return (
    <View>
      <Button title="Add a Color"
        onPress={() => {
          // create brand new array, take everything from original colors and add brand new one
          setColors([...colors, randomRgb()])
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />
        }}
      />
    </View>
  )
};

const randomRgb = () => {
  // Aim to get between 0 and 255 for each rgb value
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;