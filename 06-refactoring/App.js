import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

/*
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

// expected result

// spacer component
const spacerStyles = StyleSheet.create({spacer: {height: 50, width: 50}});

const Spacer = (props) => <View style={spacerStyles.spacer} />;

// headline component
const headlineStyles = StyleSheet.create({text: {fontSize: 16, color: 'black'}});

const Headline = (props) => <Text style={headlineStyles.text}>{props.label}</Text>;

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

const Button = (props) => (
  <TouchableOpacity onPress={() => props.onPress()} style={buttonStyles.wrapper}>
    <Text style={buttonStyles.label}>{props.label}</Text>
  </TouchableOpacity>
);

// picture component
const pictureStyles = StyleSheet.create({image: {width: '100%', height: 200, resizeMode: 'cover'}});

const Picture = (props) => <Image style={pictureStyles.image} source={props.source} />;

// container component
const containerStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20},
});

const Container = (props) => <View style={containerStyles.container}>{props.children}</View>;

const App = () => (
  <Container>
    <Headline label='Dies ist ein Beispieltext' />
    <Spacer />
    <Button label='Button Text' onPress={() => alert('Hello World')} />
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
