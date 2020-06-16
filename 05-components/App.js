import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dies ist ein Beispieltext</Text>
      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Button Text</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonWrapper: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

/*
// expected result

// headline component
const headlineStyles = StyleSheet.create({text: {fontSize: 16, color: 'black'}});

function Headline(props) {
  return <Text style={headlineStyles.text}>{props.label}</Text>;
}

// button component
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

function Button(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={buttonStyles.wrapper}>
      <Text style={buttonStyles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}

// picture component
const pictureStyles = StyleSheet.create({image: {width: '100%', height: 200, resizeMode: 'cover'}});

function Picture(props) {
  return <Image style={pictureStyles.image} source={props.source} />;
}

// container component
const containerStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20},
});

function Container(props) {
  return <View style={containerStyles.container}>{props.children}</View>;
}

export default function App() {
  return (
    <Container>
      <Headline label='Dies ist ein Beispieltext' />
      <Button label='Button Text' onPress={() => alert('Hello World')} />
      <Picture
        source={{
          uri:
            'https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        }}
      />
    </Container>
  );
}
*/
