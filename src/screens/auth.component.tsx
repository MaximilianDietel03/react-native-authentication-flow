import React, { ReactElement } from "react";
import { Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";

export const AuthScreen = (): ReactElement => {
  const { signIn, signUp } = useAuth();

  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});