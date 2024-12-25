import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface FeatureCardProps {
  item: {
    image: string;
    title: string;
    description: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#777',
  },
});

export default FeatureCard;