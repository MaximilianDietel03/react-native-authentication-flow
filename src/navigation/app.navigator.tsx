import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './home.navigator';
import { AuthNavigator } from './auth.navigator';
import { useAuth } from '../hooks/useAuth';

export const AppNavigator = (): ReactElement => {
  const { token, isInitialized } = useAuth();

  if (!isInitialized) return (
    // LoadingScreen
    <View style={[styles.container, styles.center]}>
      <Text>Loading...</Text>
    </View>
  );

  return (
    <NavigationContainer>
      {token
        ? <HomeNavigator />
        : <AuthNavigator />
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});