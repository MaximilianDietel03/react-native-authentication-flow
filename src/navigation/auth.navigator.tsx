import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '../screens/auth.component';
import { useAuth } from '../hooks/useAuth';

const Stack = createStackNavigator();

export const AuthNavigator = (): ReactElement => {
  const { isSignOut } = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Auth'
        options={{animationTypeForReplace: isSignOut ? 'pop' : 'push'}}
        component={AuthScreen}
      />
    </Stack.Navigator>
  )
}