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
import TextInput from 'react-native-material-textinput';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Signup from "./Signup";

/*
Poppins-Medium
Poppins-Bold
Poppins-SemiBold
*/
// Settings
const primaryColor = "#0A2463";
const secondaryColor = "#D9594C";

const Login: () => React$Node = ({ setSection }) => {
  const [currentSection, setCurrentSection] = useState("login");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  if(currentSection === "signup") {
    return <Signup setCurrentSection={setCurrentSection} setSection={setSection} />
  }

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.textOne}>Sign in</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            label="Email"
          /></View>
        <View style={styles.inputWrapper}>
          <TextInput
            secureTextEntry={!isPasswordVisible}
            label="Password"
          />
          <Icon style={styles.icon}
                      name={isPasswordVisible ? "visibility-off" : "visibility"}
                      size={30}
                      color="#9E9E9E"
                      onPress= {() => setIsPasswordVisible(!isPasswordVisible)}
                  />
        </View>
          <TouchableHighlight style={styles.submitButtonContainer} onPress={ () => setSection("home") }>
            <Text style={styles.submitButtonText}>Sign In</Text>
          </TouchableHighlight>
          <Text style={styles.textTwo}>Or</Text>
          <TouchableHighlight style={styles.ssoButtonContainer}>
            <View style={styles.ssoButtonTextWrapper}>
              <Image
                source={require("../assets/images/fb.png")}
                style={styles.ssoButtonIcon}
              />
              <Text style={styles.ssoButtonText}>   Continue with
               <Text style={styles.ssoButtonTextBold}> Facebook</Text>
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.ssoButtonContainer}>
            <View style={styles.ssoButtonTextWrapper}>
              <Image
                source={require("../assets/images/gg.png")}
                style={styles.ssoButtonIcon}
              />
              <Text style={styles.ssoButtonText}>   Continue with
               <Text style={styles.ssoButtonTextBold}> Google</Text>
              </Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.textThree}>Don't have an account?
            <Text
              style={styles.textThreeOrange}
              onPress={ () => setCurrentSection("signup") }
            > Sign up</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "space-evenly",
  },
  sectionContainer: {},
  submitButtonContainer: {
    backgroundColor: secondaryColor,
    borderRadius: 40,
    paddingVertical: 7,
    maxWidth: 271,
    width: "100%",
    alignSelf: "center",
    marginTop: 48,
  },
  submitButtonText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
  ssoButtonContainer: {
    backgroundColor: primaryColor,
    borderRadius: 40,
    paddingVertical: 7,
    maxWidth: 313,
    width: "100%",
    alignSelf: "center",
    marginBottom: 36,
  },
  ssoButtonText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  ssoButtonTextBold: {
    fontFamily: "Poppins-Bold",
  },
  ssoButtonTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ssoButtonIcon: {
    marginLeft: 15,
    },
  textOne: {
    color: primaryColor,
    fontFamily: "Poppins-SemiBold",
    fontSize: 36,
    width: 313,
    textAlign: "left",
    alignSelf: "center",
    marginBottom: 94,
  },
  textTwo: {
    color: primaryColor,
    fontFamily: "Poppins-Medium",
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  textThree: {
    color: primaryColor,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "center",
  },
  textThreeOrange: {
    color: secondaryColor,
  },
  inputWrapper: {
    alignSelf: "center",
    width: 313,
  },
  icon: {
        position: 'absolute',
        top: 17,
        right: 0,
  },
});

export default Login;
