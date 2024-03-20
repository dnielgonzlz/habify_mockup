import React from 'react'
import LottieView from 'lottie-react-native';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';

export default function Onboarding({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View>
            <View style={styles.lottieview}>
              <LottieView
                  source={require('../assets/videogame-opener.json')}
                  style={styles.lottie}
                  autoPlay 
                  loop
              />
              </View>
          <Text style={styles.text}> 
            Level Up. {'\n'}{'\n'}
            In Real Life.
          </Text>
              <View style={styles.button}>
          <TouchableOpacity  onPress={() => navigation.navigate("Q1")}>
            <Text style={styles.buttontext}> START</Text>
          </TouchableOpacity>
              </View>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    lottie: {
      width:300,
      height:300
        // flex: 1,
        // justifyContent: 'center',
        // alignSelf: 'center',
        // width: 350,
        // marginTop: 300 
    },
    lottieview: {
      alignSelf:'center',
      paddingTop:20

    },
    container: {
      flex:1,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#2F2F3F',
      width:'100%',
      height: '100%'

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
      alignItems: 'center',
    },
    buttontext: {
      fontSize:30,
      fontWeight:'bold'
    }

  });