import React from 'react';
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

// Settings
const primaryColor = "#0A2463";
const secondaryColor = "#D9594C";

const Signup: () => React$Node = ({ setSection }) => {

  return (
    <>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content"/>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.hello}>Hello Rakin,</Text>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionColumn}>
            <TouchableHighlight style={styles.homeButton}>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImage} source={require("../assets/images/home/adoption.png")}/>
                <Text style={styles.homeButtonText}>Adoption</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.homeButton}>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImage} source={require("../assets/images/home/red.png")}/>
                <Text style={styles.homeButtonText}>Red Zone</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.sectionColumn}>
            <TouchableHighlight style={styles.homeButton}>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImage} source={require("../assets/images/home/stray.png")}/>
                <Text style={styles.homeButtonTextStray}>Stray Animals</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.homeButtonVeterinary} onPress={ () => setSection("veterinary") }>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImageVeterinary} source={require("../assets/images/home/veterinary.png")}/>
                <Text style={styles.homeButtonText}>Veterinary</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.homeButton}>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImage} source={require("../assets/images/home/shop.png")}/>
                <Text style={styles.homeButtonText}>Shop</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.sectionColumn}>
            <TouchableHighlight style={styles.homeButton}>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImage} source={require("../assets/images/home/diet.png")}/>
                <Text style={styles.homeButtonText}>Diet Chart</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.homeButton}>
              <View style={styles.homeButtonWrapper}>
                <Image style={styles.homeButtonImage} source={require("../assets/images/home/connect.png")}/>
                <Text style={styles.homeButtonText}>Connect</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.bottomNavigation }>
        <TouchableHighlight style={{ width: "33%" }}>
         <View style={styles.bottomNavigationWrapper}>
          <Image style={styles.bottomNavigationImageHome} source={require("../assets/images/home/home.png")}/>
          <Text style={styles.bottomNavigationTextSearch}>Home</Text>
         </View>
        </TouchableHighlight>
        <TouchableHighlight style={{ width: "33%" }}>
         <View style={styles.bottomNavigationWrapper}>
          <Image style={styles.bottomNavigationImageAppointment} source={require("../assets/images/home/appointment.png")}/>
          <Text style={styles.bottomNavigationText}>Appointment</Text>
         </View>
        </TouchableHighlight>
        <TouchableHighlight style={{ width: "33%" }}>
         <View style={styles.bottomNavigationWrapper}>
          <Image style={styles.bottomNavigationImageProfile} source={require("../assets/images/home/profile.png")}/>
          <Text style={styles.bottomNavigationText}>Profile</Text>
         </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    justifyContent: "space-evenly",
  },
  titleContainer: {
    marginBottom: -35,
  },
  hello: {
    color: secondaryColor,
    textAlign: "left",
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    marginTop: 36,
    marginLeft: 25,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  sectionColumn: {
    width: "33%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  homeButton: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    height: 100,
    width: 100,
    marginTop: 34,
    marginBottom: 34,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonVeterinary: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    height: 125,
    width: 125,
    marginTop: 20,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonText: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    color: "#464646"
  },
  homeButtonTextStray: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    color: "#464646",
    maxWidth: 60,
  },
  homeButtonImage: {
    height: 40,
    width: 40,
  },
  homeButtonImageVeterinary: {
    height: 50,
    width: 50,
  },
  bottomNavigation: {
     height: 70,
     backgroundColor: "#ffffff",
     width: "100%",
     flexDirection: "row",
  },
  bottomNavigationWrapper:{
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavigationText: {
     textAlign: "center",
     width: "100%",
     fontFamily: "Poppins-Medium",
     color: "#8D8D8D",
  },
  bottomNavigationTextSearch: {
     textAlign: "center",
     width: "100%",
     fontFamily: "Poppins-Medium",
     color: secondaryColor,
 },
 bottomNavigationImageHome: {
   height: 21,
   width: 20,
   marginTop: 12,
   marginBottom: 5,
 },
 bottomNavigationImageAppointment:{
   height: 28,
   width: 28,
   marginTop: 10,
 },
 bottomNavigationImageProfile: {
   height: 21,
   width: 30,
   marginTop: 12,
   marginBottom: 5,
 },

});

export default Signup;
