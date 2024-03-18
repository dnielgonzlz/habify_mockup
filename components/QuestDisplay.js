import React from 'react';
import { ScrollView } from 'react-native';
import QuestCard from './QuestCard';
import questsData from '../assets/quests/quest.json';


const gymCardGif = require('../assets/gym-card.gif');
const mentalCardGif = require('../assets/gym-card.gif');
const perceptionCardGif = require('../assets/gym-card.gif');
const charismaCardGif = require('../assets/gym-card.gif');


const getGifForType = (type) => {
  switch(type) {
    case 'exercise': return gymCardGif;
    case 'mental': return mentalCardGif;
    case 'perception': return perceptionCardGif;
    case 'charisma': return charismaCardGif;
    default: return gymCardGif; 
  }
};

const QuestsDisplay = () => {
  const mergedQuestsData = questsData.map(quest => ({
    ...quest,
    gif: getGifForType(quest.type)
  }));

  return (
    <ScrollView>
      {mergedQuestsData.map(quest => (
        <QuestCard
          key={quest.id}
          title={quest.title}
          description={quest.description}
          points={quest.points}
          gif={quest.gif} 
        />
      ))}
    </ScrollView>
  );
};

export default QuestsDisplay;
