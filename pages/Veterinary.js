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
import {Picker} from '@react-native-picker/picker';
import Modal from './components/Modal';

import Checkbox from "./components/Checkbox";

// Settings
const primaryColor = "#0A2463";
const secondaryColor = "#D9594C";

const searchResults = [
  {
    name: "Samira Tasin",
    profession: "Veterinarian",
    rating: 5,
    reviews: 121,
    experience: 12,
    location: "Mipur",
    timespan: "9:00 am - 7:00 pm"
  },
  {
    name: "Abu Sayed",
    profession: "Veterinary Surgeon",
    rating: 5,
    reviews: 105,
    experience: 10,
    location: "Dhanmondi",
    timespan: "9:00 am - 7:00 pm"
  },
  {
    name: "Nahida Islam",
    profession: "Veterinarian Dermatologist",
    rating: 5,
    reviews: 133,
    experience: 13,
    location: "Gulshan",
    timespan: "9:00 am - 7:00 pm"
  },
  {
    name: "Tania Rahman",
    profession: "Veterinarian Dentist",
    rating: 5,
    reviews: 81,
    experience: 9,
    location: "Uttara",
    timespan: "9:00 am - 7:00 pm"
  },
  {
    name: "Samira Tasin",
    profession: "Veterinarian",
    rating: 5,
    reviews: 121,
    experience: 12,
    location: "Mipur",
    timespan: "9:00 am - 7:00 pm"
  },
]

const Veterinary: () => React$Node = ({ setSection }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [location, setLocation] = useState("java");
  const [time, setTime] = useState(undefined)

  const [experience1, setExperience1] = useState(false)
  const [experience2, setExperience2] = useState(false)
  const [experience3, setExperience3] = useState(false)
  const [experience4, setExperience4] = useState(false)
  const [experience5, setExperience5] = useState(false)

  const [rating1, setRating1] = useState(false)
  const [rating2, setRating2] = useState(false)
  const [rating3, setRating3] = useState(false)

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.body}>
        { showAdvancedSearch && (
          <Modal
            onClose={() => {
              setShowAdvancedSearch(false);
            }}
          >
            <View style={styles.modalInner}>
              <View style={styles.modalHeading}>
                <Text style={styles.modalText}>Location</Text>
              </View>
              <View style={styles.pickerView}>
                <Picker
                  mode="dropdown"
                  selectedValue={location}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  itemTextStyle={styles.pickerItemText}
                  onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
                >
                  <Picker.Item label="Select area" value="selectArea" />
                  <Picker.Item label="LongStringLongStringLongStringLongStringLongString" value="LongStringLongStringLongStringLongStringLongString" />
                </Picker>
              </View>
              <View style={styles.modalHeading}>
                <Text style={styles.modalText}>Specialist</Text>
              </View>
              <View style={styles.pickerView}>
                <Picker
                  mode="dropdown"
                  selectedValue={location}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  itemTextStyle={styles.pickerItemText}
                  onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
                >
                  <Picker.Item label="Select area" value="selectArea" />
                  <Picker.Item label="" value="" />
                </Picker>
              </View>
              <View style={styles.modalHeading}>
                <Text style={styles.modalText}>Time</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                   checked={time === 1}
                   onClick={() => {
                     setTime(time === 1 ? undefined : 1)
                   }}
                />
                <Text style={styles.labelMiddle}>Day</Text>
                <Checkbox
                   checked={time === 2}
                   onClick={() => {
                     setTime(time === 2 ? undefined : 2)
                   }}
                />
                <Text style={styles.labelMiddle}>Night</Text>
                <Checkbox
                   checked={time === 3}
                   onClick={() => {
                     setTime(time === 3 ? undefined : 3)
                   }}
                />
                <Text style={styles.labelMiddle}>24 Hours</Text>
              </View>
              <View style={styles.modalHeading}>
                <Text style={styles.modalText}>Experience <Text>(Years)</Text></Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                   checked={experience1}
                   onClick={() => {
                     setExperience1(experience1 ? false : true)
                   }}
                />
                <Text style={styles.labelTight}>0-5</Text>
                <Checkbox
                   checked={experience2}
                   onClick={() => {
                     setExperience2(experience2 ? false : true)
                   }}
                />
                <Text style={styles.labelTight}>5-10</Text>
                <Checkbox
                   checked={experience3}
                   onClick={() => {
                     setExperience3(experience3 ? false : true)
                   }}
                />
                <Text style={styles.labelTight}>10-15</Text>
                <Checkbox
                   checked={experience4}
                   onClick={() => {
                     setExperience4(experience4 ? false : true)
                   }}
                />
                <Text style={styles.labelTight}>15-20</Text>
                <Checkbox
                   checked={experience5}
                   onClick={() => {
                     setExperience5(experience5 ? false : true)
                   }}
                />
                <Text style={styles.labelTight}>20+</Text>
              </View>
              <View style={styles.modalHeading}>
                <Text style={styles.modalText}>Rating</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                   checked={rating1}
                   onClick={() => {
                     setRating1(rating1 ? false : true)
                   }}
                />
                <Text style={styles.labelLoose}>1 - 2</Text>
                <Checkbox
                   checked={rating2}
                   onClick={() => {
                     setRating2(rating2 ? false : true)
                   }}
                />
                <Text style={styles.labelLoose}>3 - 4</Text>
                <Checkbox
                   checked={rating3}
                   onClick={() => {
                     setRating3(rating3 ? false : true)
                   }}
                />
                <Text style={styles.labelLoose}>5</Text>
              </View>
              <TouchableHighlight style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Apply Filter</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        ) }
        <View style={styles.sectionSearch}>
          <View style={styles.searchButtons}>
            <TouchableHighlight
              style={styles.backButton}
              onPress={ () => setSection("home") }
            >
              <Image style={ styles.backButtonIcon } source={require("../assets/images/home/arrow.png")}/>
            </TouchableHighlight>

            <View style={styles.searchFilterSelector}>
              <TouchableHighlight
                style={selectedFilter === "all" ? styles.active : styles.inactive}
                onPress={ () => {
                  setSelectedFilter("all")
                }}
              >
                <Text style={selectedFilter === "all" ? styles.activeText : styles.inactiveText}>All</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={selectedFilter === "near" ? styles.active : styles.inactive}
                onPress={ () => {
                  setSelectedFilter("near")
                }}
              >
                <Text style={selectedFilter === "near" ? styles.activeText : styles.inactiveText}>Near Me</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.searchBar}>
            <View style={styles.realSearchBar}>
              <Image style={styles.searchIcon} source={require("../assets/images/home/search.png")}/>
              <TextInput style={styles.textInput}/>
            </View>
            <TouchableHighlight
              style={styles.advancedSearch}
              onPress={ () => {
                setShowAdvancedSearch(true);
              } }
            >
              <Image style={ styles.advancedSearchIcon } source={require("../assets/images/home/advanced.png")}/>
            </TouchableHighlight>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.sectionResults}>
          { searchResults.map((searchResult, i) => (
            <View style={styles.box} key={ i }>
              <View style={styles.resultInfo}>
                <Image style={styles.resultPicture} source={require("../assets/images/home/vetphoto.png")}/>
                <View>
                  <Text style={styles.name}>{searchResult.name}</Text>
                  <Text style={styles.profession}>{searchResult.profession}</Text>
                  <View style={styles.ratingAndReview}>
                    <Image style={styles.reviewPicture} source={require("../assets/images/home/rating-5-stars.png")}/>
                    <Text style={styles.reviews}>{searchResult.reviews} reviews</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomInfo}>
                <View style={styles.experience}>
                  <Text style={styles.experienceText}>{searchResult.experience} years of experience</Text>
                </View>
                <View style={styles.location}>
                  <Image style={styles.locationIcon} source={require("../assets/images/home/location.png")}/>
                  <Text style={styles.locationText}>{searchResult.location}</Text>
                </View>
                <View style={styles.timespan}>
                  <Image style={styles.timespanIcon} source={require("../assets/images/home/time.png")}/>
                  <Text style={styles.timespanText}>{searchResult.timespan}</Text>
                </View>
              </View>



            </View>
          )) }
        </ScrollView>
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
  sectionSearch: {
    paddingTop: 30,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
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
  sectionResults: {
    flexGrow: 1,
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10
  },
  searchButtons: {
    flexDirection: "row",
  },
  backButton: {
    marginTop: 10,
    marginLeft: 22,
  },
  backButtonIcon: {
    height: 19,
    width: 19
  },
  searchFilterSelector: {
    borderRadius: 40,
    borderColor: "#8D8D8D",
    borderWidth: 1,
    flexDirection: "row",
    marginRight: 70,
    marginLeft: 30,
    flexGrow: 1
  },
  active: {
    backgroundColor: secondaryColor,
    flexGrow: 1,
    alignItems: "center",
    borderRadius: 40,
    width: "52%",
    paddingVertical: 7,
  },
  inactive: {
    backgroundColor: "#ffffff",
    flexGrow: 1,
    alignItems: "center",
    borderRadius: 40,
    width: "48%",
    paddingVertical: 7,
  },
  activeText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  inactiveText: {
    color: secondaryColor,
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  textInput: {
    paddingVertical: 6,
    flexGrow: 1
  },
  searchBar: {
    marginTop: 24,
    marginBottom: 33,
    flexDirection: "row",
  },
  realSearchBar: {
    backgroundColor: "red",
    borderRadius: 40,
    marginLeft: 30,
    marginRight: 18,
    flexDirection: "row",
    flexGrow: 1,
  },
  searchIcon: {
    marginTop: 8,
    marginLeft: 10,
    height: 15,
    width: 15
  },
  advancedSearch: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    marginRight: 10,
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 40,
    marginLeft: 24,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginTop: 24,
    marginRight: 24,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 15
  },
  resultInfo: {
    flexDirection: "row",
    marginBottom: 16
  },
  resultPicture: {
    width: 74,
    height: 74,
    marginRight: 24
  },
  name: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    paddingVertical: 0,
    lineHeight: 25
  },
  profession: {
    color: secondaryColor,
    fontSize: 16,
    lineHeight: 32,
    fontFamily: "Poppins-Medium",
  },
  ratingAndReview: {
    flexDirection: "row",
    alignItems: "center"
  },
  reviewPicture: {
    marginRight: 24,
    height: 10,
    width: 55,
  },
  reviews: {
    fontSize: 10,
    color: "#8D8D8D",
  },
  bottomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  experience: {
    marginTop: 3
  },
  experienceText: {
    fontSize: 10,
    color: "#8D8D8D",
  },
  location: {
    flexDirection: "row",
    alignItems: "center"
  },
  locationIcon: {
    height: 20,
    width: 20
  },
  locationText: {
    fontSize: 9,
    marginLeft: 5
  },
  timespan: {
    flexDirection: "row",
    alignItems: "center"
  },
  timespanIcon: {
    height: 20,
    width: 20
  },
  timespanText: {
    fontSize: 9,
    marginLeft: 5
  },
  advancedSearchIcon: {
    height: 18,
    width: 18
  },
  modalInner: {
    padding: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    width: 384,
   },
   modalHeading: {
     marginBottom: 30,
     marginTop: 10,
     width: "100%",
     marginLeft: -30
   },
   modalText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
   },
   modalButtonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#ffffff",
   },
   modalButton: {
     backgroundColor: secondaryColor,
    borderRadius: 100,
     width: 200,
     marginTop: 30,
     paddingVertical: 3,
     alignItems: "center",
   },
   picker: {
     height: 50,
     textAlign: "center",
     width: 150,
     alignItems: "center",
     height: 28,
     marginLeft: 50
   },
   pickerItem: {
     flex: 1,
     height: 60,
     justifyContent: 'space-between',
      alignItems: 'center',
   },
   pickerView: {
     borderColor: "#000000",
     borderWidth: 1,
     borderRadius: 100,
     width: 300,
     paddingVertical: 5,
     alignItems: "center",
     justifyContent: "center",
     marginBottom: 20,
   },
   checkboxContainer: {
     width: "100%",
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "flex-start",
     marginTop: -10,
     marginBottom: 12,
     marginLeft: -13
   },
   labelMiddle: {
     marginRight: 10
   },
   labelTight: {
     marginRight: 5
   },
   labelLoose: {
     marginRight: 20
   }
});

export default Veterinary;
