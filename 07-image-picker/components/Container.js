import React from 'react';
import {StyleSheet, View} from 'react-native';

const containerStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20},
});

const Container = (props) => <View style={containerStyles.container}>{props.children}</View>;

export default Container;
