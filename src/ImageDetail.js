import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  console.log(props.madeUpTitleBananas);
  return <View>
    {/* <Image source={require('../assets/beach.jpg')} /> */}
    <Image source={props.imageSource} />
    <Text>Show Image of {props.madeUpTitleBananas}</Text>
    <Text>Score: {props.score}</Text>
  </View>
}

const styles = StyleSheet.create({});

export default ImageDetail;