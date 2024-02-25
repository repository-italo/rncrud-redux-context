import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import Stack from './components/Stack';
import {UsersProvider} from './context/UsersContext';

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </UsersProvider>
  );
};
