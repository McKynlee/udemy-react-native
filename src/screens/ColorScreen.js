import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COLORS':
      return action.payload;
    default:
      return state;
  }
}

const ColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { colors: [] });


  return (
    <View>
      <Button title="Add a Color"
        onPress={() => {
          // create brand new array, take everything from original colors and add brand new one
          dispatch({ type: 'SET_COLORS', payload: [...state.colors, randomRgb()] })
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={state.colors}
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