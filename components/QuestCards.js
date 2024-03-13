import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';


const QuestCard = () => (
    <View style={styles.container}>
        <Card style={styles.card}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
            <Card.Content stlye={styles.card} >
            <Text variant="titleLarge" style={styles.cardtext}>PHY</Text>
            {/* <Text variant="bodyMedium">Card content</Text> */}
            </Card.Content>
            <View style={styles.card}>
                <Image
                source={require('/Users/danielgonzalez/Desktop/Projects of React Native/Habify/onboarding-screen/assets/gym-card.gif')}
                style={styles.gif}
                />
            </View>
        </Card>
    </View>
);

export default QuestCard;

const styles = StyleSheet.create({
    card: {
        height:80,
        width: 300,
        borderRadius: 10
    },
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -80
    },
    gif: {
        width: 300,
        height: 70,
        borderRadius:20
    },
    cardtext: {
        fontWeight: 'bold'
    }
})