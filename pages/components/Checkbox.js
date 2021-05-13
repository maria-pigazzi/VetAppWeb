import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const primaryColor = "#0A2463";
const secondaryColor = "#D9594C";

const Checkbox: () => React$Node = ({ checked, onClick }) => {
  const checkedStyle = checked ? styles.checkedCheckbox : styles.checkbox;
  return (
    <>
      <TouchableHighlight
        onPress={ onClick }
        style={ styles.checkbox }
      >
        <View style={ checkedStyle } />
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 19,
    height: 19,
    borderColor: "#8D8D8D",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    marginRight: 5
  },
  checkedCheckbox: {
    width: 19,
    height: 19,
    borderColor: "#8D8D8D",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: secondaryColor
  }
})

export default Checkbox;
