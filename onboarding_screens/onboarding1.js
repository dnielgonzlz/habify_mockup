import React from 'react'
import LottieView from 'lottie-react-native';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

export default function Onboarding({navigation}) {

  return (
      <View style={styles.container}>
              <LottieView
                  source={require('../assets/videogame-opener.json')}
                  style={styles.lottie}
                  autoPlay 
                  loop
              />
          <Text style={styles.text}> 
            Level Up. {'\n'}{'\n'}
            In Real Life 🐼i
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Q1")}>
            <Text style={styles.buttontext}> START</Text>
          </TouchableOpacity>
          {/* <SimpleButton title="Get Started" onPress={() => navigation.navigate("Q1")} /> */}
      </View>
  );
}

const styles = StyleSheet.create({
    lottie: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 350,
        marginTop: 40 
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      // aspectRatio: 16/9
      backgroundColor: '#2F2F3F'
    },
    text: {
      fontSize: 35,
      textAlign:'center',
      marginBottom: 100,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#1560bd',
      padding: 25,
      borderRadius: 20,
      marginBottom: 80,
      alignSelf: 'center',
      width:'100%'
    },
    buttontext: {
      fontSize:30,
      fontWeight:'bold'
    }

  });