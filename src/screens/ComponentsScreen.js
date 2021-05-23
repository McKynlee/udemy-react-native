import React from 'react';
import { Text, Stylesheet } from 'react-native';

const ComponentsScreen = () => {
  return (
    <Text style={styles.textStyle}>Components Screen</Text>
  );
};


const styles = stylesheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;