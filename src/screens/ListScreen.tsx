import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {CharacterRow} from '../components/organisms';
import {Character} from '../types';
import {useCharacters} from '../hooks';
import {Colors} from '../resources';
import {Header} from '../components/templates';

const ListScreen = () => {
  const {items, loading, getCharacters} = useCharacters();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const renderCharacters = (character: {item: Character}) => {
    return <CharacterRow character={character.item} key={character.item.id} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={Colors.white} />
        </View>
      ) : (
        <Header title={'DC Characters'}>
          <FlatList
            keyExtractor={(item, _index) => `${item.id}`}
            data={items}
            renderItem={renderCharacters}
          />
        </Header>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListScreen;
