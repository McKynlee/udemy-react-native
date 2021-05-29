import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log('props:', props);
  // we removed (props) and replaced with ({navigation}) because that's the only property we're accessing


  return (
    <View>
      <Text style={styles.text}>Welcome!</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>
          Go to List Demo
        </Text>
      </TouchableOpacity> */}

      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />

      <Button
        title='Go to Text Demo'
        onPress={() => navigation.navigate('Text')}
      />

    </View >
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
