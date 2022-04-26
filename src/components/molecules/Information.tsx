import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Typography} from '../../resources';
import {Character} from '../../types';
import {Title} from '../atoms';

interface InformationProps {
  character: Character;
}

const Information = ({character}: InformationProps) => {
  return (
    <View style={styles.container}>
      <Title title={character.name} />
      <Title style={styles.alterEgo} title={character.alterEgo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  alterEgo: {
    ...Typography.subtitle,
  },
});

export default Information;
