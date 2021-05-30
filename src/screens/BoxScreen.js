import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.parentViewStyle}>
    {/* <Text style={styles.textOneStyle}>Child 1</Text>
    <Text style={styles.textTwoStyle}>Child 2</Text>
    <Text style={styles.textThreeStyle}>Child 3</Text> */}
    <View style={styles.viewOneStyle} />
    <View style={styles.viewTwoStyle} />
    <View style={styles.viewThreeStyle} />
  </View>
}

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 200,

  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // margin: 10,
    // padding: 20,
    // alignSelf: 'flex-end',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // right: 0,
    // top: 0,
    // left: 0,
    // bottom: 0,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // margin: 10,
    // padding: 20,
    // alignSelf: 'flex-start',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});

export default BoxScreen;