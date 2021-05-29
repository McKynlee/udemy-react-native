import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [input, setInput] = useState('');

  return <View>
    <Text>Enter Name:</Text>
    <TextInput style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={input}
      onChangeText={(evt) => setInput(evt)}
    />
    <Text>My name is {input}</Text>
    {input.length > 5 ? <Text>Too long!</Text> : null}
  </View>
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;