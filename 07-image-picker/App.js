import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import Spacer from './components/Spacer';
import Headline from './components/Headline';
import Button from './components/Button';
import Container from './components/Container';
import Picture from './components/Picture';

const App = () => (
  <Container>
    <Headline label='select image from gallery' />
    <Spacer />
    <Button label='select image' onPress={() => alert('select image')} />
    <Spacer />
    <Picture
      source={{
        uri:
          'https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      }}
    />
  </Container>
);

export default App;

/*
// expected result

const App = () => {
  const [picture, setPicture] = useState(null);

  const selectPicture = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setPicture(pickerResult.uri);
  };

  return (
    <Container>
      <Headline label='select image from gallery' />
      <Spacer />
      {picture === null && (
        <>
          <Button label='select image' onPress={() => selectPicture()} />
          <Spacer />
        </>
      )}
      {picture !== null && (
        <Picture
          source={{
            uri: picture,
          }}
        />
      )}
    </Container>
  );
};

export default App;
*/
