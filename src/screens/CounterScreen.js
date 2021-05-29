import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { ...state, totalCount: state.totalCount + 1 };
    case 'DECREASE_COUNT':
      return { ...state, totalCount: state.totalCount - 1 }
    default:
      return state;
  }
}


const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { totalCount: 0 });

  return <View>
    <Button
      title='Increase'
      onPress={() => dispatch({ type: 'INCREASE_COUNT' })}
    />
    <Button
      title='Decrease'
      onPress={() => dispatch({ type: 'DECREASE_COUNT' })}
    />
    <Text>Total Count: {state.totalCount}</Text>

  </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;