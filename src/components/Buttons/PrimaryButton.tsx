import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface props {
  title?: string;
  onPress: () => void;
}

const PrimaryButton: FC<props> = ({ title, onPress }) => {
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
    borderWidth: 1,
    borderColor: '#C0392B',
    padding: 7,
    borderRadius: 5,
    backgroundColor: '#E74C3C',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ECF0F1',
  },

  wrapper: {
    margin: 20,
  },
});

export { PrimaryButton };
