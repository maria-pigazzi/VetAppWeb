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

const Modal: () => React$Node = ({ children, onClose }) => {
  return (
    <>
      <TouchableWithoutFeedback
        style={ styles.modalBackdrop }
        onPress={ onClose }
      >
        <View style={ styles.modalBackdrop }>
          <TouchableWithoutFeedback style={ styles.modalContainer } onPress={ e => { e.preventDefault(); e.stopPropagation(); } }>
            <View style={ styles.modalContainer }>
              { children }
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  modalBackdrop: {
    zIndex: 10000,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
  }
})

export default Modal;
