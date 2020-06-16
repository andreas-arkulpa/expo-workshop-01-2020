// import 'react-native-gesture-handler';
// import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import Spacer from './components/Spacer';
import Headline from './components/Headline';
import Button from './components/Button';
import Container from './components/Container';

const App = () => (
  <Container>
    <Headline label='select image from gallery' />
    <Spacer />
    <Button label='select image' onPress={() => alert('select image')} />
  </Container>
);

export default App;

/*
// expected result
const Stack = createStackNavigator();

const HomeScreen = (props) => (
  <Container>
    <Headline label='Hello World' />
    <Spacer />
    <Button label='other screen' onPress={() => props.navigation.navigate('Detail')} />
  </Container>
);

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Headline label='Detail' />
      <Spacer />
      <Button label='go back' onPress={() => navigation.goBack()} />
    </Container>
  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
*/
