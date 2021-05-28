import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <Text>Image Screen</Text>
    <ImageDetail madeUpTitleBananas="Forest"
      imageSource={require('../../assets/forest.jpg')}
      score={9}
    />
    <ImageDetail madeUpTitleBananas="Beach"
      imageSource={require('../../assets/beach.jpg')}
      score={7}
    />
    <ImageDetail madeUpTitleBananas="Mountain"
      imageSource={require('../../assets/mountain.jpg')}
      score={5}
    />
  </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;