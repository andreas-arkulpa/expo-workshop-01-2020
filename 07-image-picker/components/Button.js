import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

const Button = (props) => (
  <TouchableOpacity onPress={() => props.onPress()} style={buttonStyles.wrapper}>
    <Text style={buttonStyles.label}>{props.label}</Text>
  </TouchableOpacity>
);

export default Button;
