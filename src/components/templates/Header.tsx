import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Typography} from '../../resources';

interface HeaderProps {
  title: string;
  children: JSX.Element;
}

const Header = ({title, children}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.headline,
    textTransform: 'uppercase',
  },
});

export default Header;
