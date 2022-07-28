import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  return (
    <View>
      <Text>Welcome to Welcome!</Text>
    </View>
  );
}

export default Welcome;
