import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, FlatList, Text } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import LottieView from 'lottie-react-native';

export default function Hobbies({ navigation }) {
  const hobbies = [
    { id: 1, name: 'Coffee', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/coffee.json') },
    { id: 2, name: 'Cooking', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/cooking.json') },
    { id: 3, name: 'Friends', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/friends.json') },
    { id: 4, name: 'Parks', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/parks.json') },
    { id: 5, name: 'Play Music', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/play-music.json') },
    { id: 6, name: 'Sports', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/Sports.json') },
    { id: 7, name: 'Reading', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/reading.json') },
    { id: 8, name: 'Watch TV', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/watch-tv.json') },
    { id: 9, name: 'Play Videogames', animation: require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/gameboy.json') },
  ];

  const [selectedHobbies, setSelectedHobbies] = React.useState([]);

  const handleHobbyPress = (id) => {
    const index = selectedHobbies.indexOf(id);
    if (index === -1) {
      setSelectedHobbies([...selectedHobbies, id]);
    } else {
      const updatedSelectedHobbies = [...selectedHobbies];
      updatedSelectedHobbies.splice(index, 1);
      setSelectedHobbies(updatedSelectedHobbies);
    }
  };

  const handleCheckboxPress = (id) => {
    const index = selectedHobbies.indexOf(id);
    if (index === -1) {
      setSelectedHobbies([...selectedHobbies, id]);
    } else {
      const updatedSelectedHobbies = [...selectedHobbies];
      updatedSelectedHobbies.splice(index, 1);
      setSelectedHobbies(updatedSelectedHobbies);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedHobbies.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => handleHobbyPress(item.id)}
        style={styles.itemContainer}
      >
        <LottieView
          source={item.animation}
          autoPlay
          loop={false}
          style={styles.animation}
        />
        <Text style={styles.hobbyName}>{item.name}</Text>
        <Checkbox
          value={isSelected}
          onValueChange={() => handleCheckboxPress(item.id)}
          style={styles.checkbox}
          color="#5072A7"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={hobbies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main Screen")}
      >
        <Text style={styles.buttontext}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F3F',
    marginTop: 130
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  animation: {
    width: 100,
    height: 100,
  },
  hobbyName: {
    marginTop: 5,
    color: 'white',
    backgroundColor:'#5072A7'
  },
  checkbox: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  button: {
    backgroundColor: '#1560bd',
    borderRadius: 20,
    marginBottom: 150,
    alignSelf: 'center',
    width: '50%',
  },
  buttontext: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
