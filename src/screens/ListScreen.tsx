import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CharacterRow} from '../components/organisms';
import {useCharacters} from '../hooks';
import {RootState} from '../store';
import {charactersSlice} from '../store/charactersSlice';
import {Character} from '../types';

const ListScreen = () => {
  const {characters} = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch();
  //const {characters, error, loading, getCharacters} = useCharacters();

  useEffect(() => {
    dispatch(charactersSlice());
  }, [dispatch]);

  const renderCharacters = (character: {item: Character}) => {
    return <CharacterRow character={character.item} key={character.item.id} />;
  };

  return (
    <View style={styles.container}>
      {/* {loading ? (
        <Text>Loading...</Text>
      ) : ( */}
      <FlatList
        keyExtractor={(item, _index) => `${item.id}`}
        data={characters}
        renderItem={renderCharacters}
      />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default ListScreen;
