import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

export interface HelloTextProps {
  text?: string;
  style?: TextStyle | TextStyle[];
}

export const HelloText: React.FC<HelloTextProps> = ({ text = 'Hello Storybook!', style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#333',
  },
}); 