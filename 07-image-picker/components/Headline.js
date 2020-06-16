import React from 'react';
import {StyleSheet, Text} from 'react-native';

const headlineStyles = StyleSheet.create({text: {fontSize: 16, color: 'black'}});

const Headline = (props) => <Text style={headlineStyles.text}>{props.label}</Text>;

export default Headline;
