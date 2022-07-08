import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Candidates from '../screens/Candidates';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
 <Stack.Navigator>
 <Stack.Screen name="Candidates" options={{headerShown:false}}   component={Candidates} />
 </Stack.Navigator>
  )
}

export default StackNavigator