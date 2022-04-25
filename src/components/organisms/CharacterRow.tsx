import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Character} from '../../types';

interface CharacterProps {
  character: Character;
}
const CharacterRow = ({character}: CharacterProps) => {
  console.log(character);
  return (
    <View style={styles.container}>
      <Text>{character.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default CharacterRow;
