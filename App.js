// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';

const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: 'Busca de usuário'}} component={HomeScreen} />
        <Stack.Screen name="Detail" options={{title: 'Resultado da busca'}} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;