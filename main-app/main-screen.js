import React from "react";
import LottieView from "lottie-react-native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from "react-native";

import QuestsDisplays from "../components/QuestDisplay";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <LottieView
                  source={require('../assets/gameboy.json')}
                  style={styles.lottie}
                  autoPlay 
                  loop
              /> */}
      <Text style={styles.text}>These are your Daily Quests!</Text>
      <QuestsDisplays />
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: 350,
    marginTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    // aspectRatio: 16/9
    backgroundColor: "#2F2F3F",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1560bd",
    padding: 25,
    borderRadius: 20,
    marginBottom: 80,
    alignSelf: "center",
    width: "100%",
  },
  buttontext: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
