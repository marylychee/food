import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initalRouteName="Search"
    >
      <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: 'Business Search' }}
      />
    </Stack.Navigator>
  )
};


export default function App() {
    return <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>;
}
