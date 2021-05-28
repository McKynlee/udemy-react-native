import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [totalCount, setTotalCount] = useState(0);

  return <View>
    <Button
      title='Increase'
      onPress={() => setTotalCount(totalCount + 1)}
    />
    <Button
      title='Decrease'
      onPress={() => setTotalCount(totalCount - 1)}
    />
    <Text>Total Count: {totalCount}</Text>

  </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;