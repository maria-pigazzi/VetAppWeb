import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import { useFonts } from 'expo-font';

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Veterinary from "./pages/Veterinary";

function AppRouter() {
  const [section, setSection] = useState("welcome")
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require('./assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  switch(section) {
    case "login":
      return (
        <Login setSection={ setSection } />
      );
    case "home":
      return (
        <Home setSection={ setSection } />
      );
    case "veterinary":
      return (
        <Veterinary setSection={ setSection } />
      );
    case "welcome":
    default:
      return (
        <Welcome setSection={ setSection } />
      );
  }
}

const App: () => React$Node = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require('./assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf')
  });

  return (
    <View style={ styles.screenContainer }>
      <View style={ styles.mobileView }>
        <AppRouter />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  mobileView: {
    height: 909,
    width: 454,

    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
    overflow: "hidden"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
