import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {Typography} from '../../resources';

interface TitleProps {
  title: string;
  style?: TextStyle;
}

const Title = ({title, style}: TitleProps) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...Typography.title,
  },
});

export default Title;
