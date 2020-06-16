import React from 'react';
import {StyleSheet, Image} from 'react-native';

const pictureStyles = StyleSheet.create({image: {width: '100%', height: 200, resizeMode: 'cover'}});

const Picture = (props) => <Image style={pictureStyles.image} source={props.source} />;

export default Picture;
