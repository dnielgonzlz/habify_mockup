import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';


const PriorityStat = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.top}>Which one of these skills is your priority?</Text>
            <View>
                {/* Strength Button! */}
                <Button 
                    icon={({color, size}) => <AntDesign name="rightcircle" size={24} color="black" />}
                    mode='contained' 
                    buttonColor='#1560bd'
                    dark={false}
                    labelStyle={styles.buttonText}
                    style={{ width: 350, alignSelf:'center'}}
                    onPress={() => navigation.navigate("Favorite Hobbies")}
                    >
                            Strength
                </Button>
                <Text style={styles.underbuttontext}>Physical Ability and Strength</Text>
                {/* Mind Button! */}
                <Button 
                    icon={({color, size}) => <AntDesign name="rightcircle" size={24} color="black" />}
                    mode='contained' 
                    buttonColor='#1560bd'
                    dark={false}
                    labelStyle={styles.buttonText}
                    style={{ width: 350, alignSelf:'center'}}
                    onPress={() => navigation.navigate("Favorite Hobbies")}>
                            Mind
                </Button>
                <Text style={styles.underbuttontext}>Mental Health Levels</Text>
                {/* Charisma Button! */}
                <Button 
                    icon={({color, size}) => <AntDesign name="rightcircle" size={24} color="black" />}
                    mode='contained' 
                    buttonColor='#1560bd'
                    dark={false}
                    labelStyle={styles.buttonText}
                    style={{ width: 350, alignSelf:'center'}}
                    onPress={() => navigation.navigate("Favorite Hobbies")}>
                        Charisma
                </Button>
                <Text style={styles.underbuttontext}>Social Skills and Conversations</Text>
                {/* Perception Button! */}
                <Button 
                    icon={({color, size}) => <AntDesign name="rightcircle" size={24} color="black" />}
                    mode='contained' 
                    buttonColor='#1560bd'
                    dark={false}
                    labelStyle={styles.buttonText}
                    style={{ width: 350, alignSelf:'center'}}
                    onPress={() => navigation.navigate("Favorite Hobbies")}>
                         Perception
                </Button>
                <Text style={styles.underbuttontext}>Reactions to events outside your control</Text>
                {/* Willpower Button! */}
                <Button 
                    icon={({color, size}) => <AntDesign name="rightcircle" size={24} color="black" />}
                    mode='contained' 
                    buttonColor='#1560bd'
                    dark={false}
                    labelStyle={styles.buttonText}
                    style={{ width: 350, alignSelf:'center'}}
                    onPress={() => navigation.navigate("Favorite Hobbies")}>
                         Willpower
                </Button>
                
                <Text style={styles.underbuttontext}>Self Control and Consistency</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Welcome!")}>
               <Text style={styles.bottom}>NEXT</Text> 
            </TouchableOpacity>
        </View>
    </View>
    </View>
    )
}

export default PriorityStat;

const styles = StyleSheet.create({
    container: {
        padding:12,
        backgroundColor: '#2F2F3F',
    },

    top: {
        marginVertical: 60,
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
        fontSize: 21
      },
      underbuttontext: {
        color: "white",
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 5,
        marginBottom: 15,
        fontSize: 14
      }

})