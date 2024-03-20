import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Animated } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';

const QuestCard = ({ title, description, points, gif }) => {
  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.rightActions}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Completed
        </Animated.Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swipeable
        renderRightActions={renderRightActions}
        friction={2}
      >
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.points}>Points: {points}</Text>
          </Card.Content>
          <Image source={gif} style={styles.icon} />
        </Card>
      </Swipeable>
    </View>
  );
};

export default QuestCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: 300,
  },
  cardContent: {
    padding: 10,
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  points: {
    fontSize: 16,
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  rightActions: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: 'green',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
