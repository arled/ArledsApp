import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface props {
  title?: string;
  onPress: () => void;
}

const TextButton: FC<props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 5,
    // backgroundColor: '#E74C3C',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    color: '#E74C3C',
  },

  wrapper: {
    margin: 20,
  },
});

export { TextButton };
