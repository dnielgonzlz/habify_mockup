import React from 'react'
import LottieView from 'lottie-react-native';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Alert} from 'react-native';


export default function AvatarScreen({navigation}) {

    const stats_name = [
      {title: "STR", stat:"1", description: "Strength represents physical power and ability." }, 
      {title:"MIND", stat:"1", description: "Mind represents mental health."}, 
      {title:"CHA",  stat:"2", description: "Charisma represents charm and social skills."}, 
      {title:"PER",  stat:"1", description: "Perception represents how you react to events outside your control."}, 
      {title:"WILL", stat:"1", description: "Willpower represents determination and self control."}]

      const handleTitlePress = (title, description) => {
        Alert.alert(
          `Explanation for ${title}`,
          description,
          [{text: "OK", onPress: () => console.log("Ok Pressed") }],
          {cancelable: false}
          )
      }

    const renderStatItem = ({ item }) => (
      <TouchableOpacity onPress={() => handleTitlePress(item.title, item.description)}>
        <View style={styles.row}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title} </Text>
            </View>
            <View style={styles.statContainer}>
            <Text style={styles.stattext}>{item.stat}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );

    const Box = ({title}) => (
      <View style={styles.statbox}>
        <Text style={styles.stattext}>{title}</Text>
      </View>
    )
    
    const Stat = ({stat}) => (
      <View style={styles.statbox}>
        <Text style={styles.stattext}>{stat}</Text>
      </View>
    )
  
  return (
      <View style={styles.container}>
        <FlatList
          data={stats_name}
          renderItem={renderStatItem}
          keyExtractor={(item, index) => index.toString()}
          style={{ marginTop: 90}}
          />

              <LottieView
                  source={require('../assets/avatar.json')}
                  style={styles.lottie}
                  autoPlay 
                  loop
              />
      </View>
  );
}

const styles = StyleSheet.create({
    lottie: {
        alignSelf: 'center',
        width:300, 
        height: 300,
        marginBottom: 60
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#2F2F3F',
      paddingHorizontal:20
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
    },
    stattext: {
        fontSize: 25,
        fontWeight:'bold'
    },
    statbox: {
      backgroundColor: "purple",
      padding: 5,
      borderRadius: 10,
      alignSelf: 'flex-start',
      margin: 2,
      marginVertical: 7, // Adjust this value to reduce the vertical gap between stat boxes
    },    
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical:4,
      width: '80%'
  },
    title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
   },
    titleContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#5072A7',
    borderRadius: 10,
    padding: 4
},
    statContainer: {
    alignItems: 'flex-end',
    paddingLeft: 50
},
  });