import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HOLA PERRAS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F2F3F'
    },
    text: {
        fontWeight:'bold',
        fontSize:20
    }
});