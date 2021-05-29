import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//// Rocking the useReducer /////////////
// To avoid asynchronous problems, define this reducer outside of component function:
const reducer = (state, action) => {
  // state ==== { red: 0, green: 0, blue: 0 }
  // action === {colorToChange: '', howToChange: 15 || -15}

  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        // DO NOT do state.red = state.red + action.amount, instead create new object
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state;
  }
};

const SquareScreen = () => {

  // Pass your reducer function along with inital state as arguments
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  // destructure state so we can access variables directly instead of state.red, etc.
  const { red, green, blue } = state;




  ////////////////////How to rock with local state: ////////////
  // const [red, setRed] = useState(0);
  // const [blue, setBlue] = useState(0);
  // const [green, setGreen] = useState(0);

  // const setColor = (color, change) => {
  //   // color === 'red' || 'green' || 'blue'
  //   // change === +15 || -15

  //   switch (color) {
  //     case 'red':
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case 'green':
  //       green + change > 255 || green + change < 0 ? null : setGreen(green + change);
  //       return;
  //     case 'blue':
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return <View>
    <ColorCounter color="Red"
      // onIncrease={() => setColor('red', COLOR_INCREMENT)}
      // onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
    />
    <ColorCounter color="Blue"
      onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
    />
    <ColorCounter color="Green"
      onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
    />

    <View style={{
      height: 150,
      width: 150,
      backgroundColor: `rgb(${red},${green},${blue})`
    }} />
  </View>
}

const styles = StyleSheet.create({
  // colorBox: {
  //   height: 150,
  //   width: 150,
  //   backgroundColor: `rgb(${red},${green},${blue})`,
  // }
});

export default SquareScreen;