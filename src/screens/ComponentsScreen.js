import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const myName = "McKynlee"
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text>My name is {myName}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  smallTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;