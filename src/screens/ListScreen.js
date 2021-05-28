import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Callie', age: '26' },
    { name: 'Jane', age: '35' },
    { name: 'Melissa', age: '33' },
    { name: 'Kelsey', age: '34' },
    { name: 'Lori', age: '33' },
    { name: 'Jennifer', age: '29' },
    { name: 'Spencer', age: '24' },
    { name: 'Jenny', age: '31' },
  ]

  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        // Display list horizontally
        // horizontal
        // Hide scroll bar
        showsHorizontalScrollIndicator={false}
        data={friends}
        keyExtractor={(friend, i) => {
          // I don't love this because you can have friends with same name:
          // friend.name
          i
        }}
        renderItem={({ item }) => {
          // element looks like: { item: {name: 'Callie', age: '26'}, index: 0}
          // so we use 'item' instead of 'element' as the parameter
          return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 50
  }
});

export default ListScreen;
