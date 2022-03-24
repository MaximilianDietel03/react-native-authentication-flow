import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home.component';

const Stack = createStackNavigator();

export const HomeNavigator = (): ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
  </Stack.Navigator>
);
