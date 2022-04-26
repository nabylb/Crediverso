import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors, Metrics} from '../../resources';
import {Character} from '../../types';
import {Description} from '../atoms';
import {Information} from '../molecules';

interface CharacterProps {
  character: Character;
}

const CharacterRow = ({character}: CharacterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.placeholder}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: character.imgUrl}}
          />
        </View>
        <Information character={character} />
      </View>
      <Description character={character} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2 * Metrics.margin,
    shadowColor: Colors.black,
    shadowOffset: {
      width: Metrics.shadowOffsetWidth,
      height: Metrics.shadowOffsetHeight,
    },
    shadowOpacity: Metrics.shadowOpacity,
    shadowRadius: Metrics.shadowRadius,
    backgroundColor: Colors.backGroundSecondaryDark,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: -3 * Metrics.margin,
    left: -10,
    height: 100,
    width: 100,
    margin: Metrics.margin,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  placeholder: {
    height: 80,
    width: 100,
    marginHorizontal: Metrics.margin,
  },
});

export default CharacterRow;
