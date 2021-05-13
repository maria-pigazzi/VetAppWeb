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

} from 'react-native';

// Settings
const primaryColor = "#0A2463";
const secondaryColor = "#D9594C";

const Welcome: () => React$Node = ({ setSection }) => {
  return (
    <>
      <StatusBar backgroundColor={primaryColor} />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Image style={styles.paw} source={require("../assets/images/pawPrint.png")}/>
          <Text style={styles.sectionTitle}>Welcome to <Text style={styles.highlight}>PetHub</Text></Text>
          <Text style={styles.sectionDescription}>
            Find everything for your pet at one place
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <TouchableHighlight style={styles.nextButtonContainer} onPress={ () => setSection("login") }>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: primaryColor,
    flex: 1,
    justifyContent: "space-evenly",
  },
  sectionContainer: {
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 32,
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
    alignSelf: "center",
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 17,
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
    alignSelf: "center",
    textAlign: "center",
    paddingHorizontal: 25,
  },
  highlight: {
    color: secondaryColor,
  },
  paw: {
    height: 141,
    width: 141,
    alignSelf: "center",
    marginBottom: 62,
  },
  nextButtonContainer: {
    backgroundColor: secondaryColor,
    borderRadius: 40,
    paddingVertical: 7,
    maxWidth: 271,
    width: "100%",
    alignSelf: "center",
  },
  nextButtonText: {
    color: primaryColor,
    alignSelf: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
});

export default Welcome;
