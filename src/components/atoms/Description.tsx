import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Metrics, Typography} from '../../resources';
import {Character} from '../../types';

interface DescriptionProps {
  character: Character;
}

const Description = ({character}: DescriptionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{character.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Metrics.margin,
  },
  description: {
    ...Typography.body,
  },
});

export default Description;
