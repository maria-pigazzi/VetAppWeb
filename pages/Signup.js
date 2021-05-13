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

// Settings
const primaryColor = "#0A2463";
const secondaryColor = "#D9594C";

const validateEmail = (email) => {
    const re = /^.+\@.+$/;
    return re.test(String(email).toLowerCase());
}

const handleSubmit = (email, setEmailError, password, setPasswordError, setSection) => {
  let isValid = true;

  if (validateEmail(email)) {
    setEmailError(undefined);
  }
  else {
    setEmailError("Invalid email address");
    isValid = false;
  }

  if (password && password.length >= 8) {
    setPasswordError(undefined);
  }
  else {
    setPasswordError ("Password must be 8 characters long");
    isValid = false;
  }

  if (isValid) {
    setSection("home");
  }
}

const Signup: () => React$Node = ({setCurrentSection, setSection}) => {
  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.textOne}>Sign Up</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              label="Full Name"
            /></View>
          <View style={styles.inputWrapper}>
            <TextInput
              error={emailError}
              value={email}
              onChangeText={e => setEmail( e )}
              label="Email"
            /></View>
          <View style={styles.inputWrapper}>
            <TextInput
            error={passwordError}
            value={password}
            onChangeText={e => setPassword( e )}
            label="Password"
            secureTextEntry={!isPasswordVisible}
            />
            <Icon style={styles.icon}
                        name={isPasswordVisible ? "visibility-off" : "visibility"}
                        size={30}
                        color="#9E9E9E"
                        onPress= {() => setIsPasswordVisible(!isPasswordVisible)}
                    />
          </View>
          <TouchableHighlight style={styles.submitButtonContainer} onPress={ () => handleSubmit(email, setEmailError, password, setPasswordError, setSection) }>
            <Text style={styles.submitButtonText}>Sign Up</Text>
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
          <Text style={styles.textThree}>Already have an account?
            <Text
              style={styles.textThreeOrange}
              onPress={ () => setCurrentSection("login") }
            > Sign in</Text>
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
    marginBottom: 32,
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

export default Signup;
