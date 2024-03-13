import React from 'react';
import { ScrollView } from 'react-native';
import QuestCard from './QuestCard'; // Assuming you have defined QuestCard component
import questsData from '../assets/quests/quest.json'; // Import the quests data

const QuestsDisplay = () => (
  <ScrollView>
    {questsData.map(quest => (
      <QuestCard
        key={quest.id}
        title={quest.title}
        description={quest.description}
        points={quest.points}
        gif={require('../assets/gym-card.gif')}
      />
    ))}
  </ScrollView>
);

export default QuestsDisplay;
