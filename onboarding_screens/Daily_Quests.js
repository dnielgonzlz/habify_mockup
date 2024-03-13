import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DailyQuests = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.top}>How many Daily Quests do you want to do each day?</Text>
            </View>
            <View style={styles.options}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Main Screen")}>
            <Text style={styles.buttonText}> One per day </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Main Screen")}>
            <Text style={styles.buttonText}> Two per day </Text>
            </TouchableOpacity>
            {/* */}
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Main Screen")}>
            <Text style={styles.buttonText}> Three per day </Text>
            </TouchableOpacity>
            </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Welcome!")}>
               <Text style={styles.bottom}>NEXT</Text> 
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default DailyQuests;

const styles = StyleSheet.create({
    container: {
        padding:12,
        backgroundColor: '#2F2F3F'
    },

    top: {
        marginVertical: 120,
        alignSelf: 'center',
        fontSize: 45,
        fontWeight: 'bold'
    },
    options: {
        marginVertical: -20,
        alignSelf:'center'
    }, 
    bottom: {
        marginBottom:12,
        marginVertical:20,
        paddingHorizontal: 90,
        justifyContent:"space-between",
        flexDirection:"row",
        alignSelf:'center',
        backgroundColor:'#1560bd',
        fontSize: 25,
        fontWeight:'bold'
    },
    button: {
        backgroundColor: '#1560bd',
        padding: 10,
        borderRadius: 13,
        marginBottom: 20,
        alignSelf: 'center',
        width:'100%'
      },
      buttonText: {
        fontSize: 24
      }

})