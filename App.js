import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen1 from './onboarding_screens/onboarding1';
import FormRating from './onboarding_screens/Physical_Question';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import PriorityStat from './onboarding_screens/PriorityStat';
import Hobbies from './onboarding_screens/Hobbies';
import StreakCounter from './main-app/streaks';
import AvatarScreen from './main-app/avatar';

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <MyStack/>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F2F3F',
        padding: 0, // set padding to 0
        margin: 0, // set margin to 0
    },
});
