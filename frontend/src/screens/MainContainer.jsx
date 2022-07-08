import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './Bottom/Home'
import Settings from './Bottom/Settings'

const homeName='Home'
const settingsName='Settings'

const Tab=createBottomTabNavigator();

const MainContainer = () => {
  return (
//   <NavigationContainer>
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route})=>({


        tabBarIcon: ({focused,color,size})=>{
            let iconName;
            let rn= route.name;

            if(rn===homeName){
                iconName=focused?'home':'home-outline'
            }
            else if(rn===settingsName){
                iconName=focused?'settings':'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        },
        tabBarActiveTintColor: "#e29578",
        tabBarInactiveTintColor: "black",
        headerShown: true,
        tabBarStyle: {
          position: "absolute",
          height: 80,
          ...styles.shadow}

    })}
  
    >

        <Tab.Screen name={homeName} options={{headerShown:false}} component ={Home}/>
        <Tab.Screen name={settingsName} component ={Settings}/>



    </Tab.Navigator>
//   </NavigationContainer>
  )
}

export default MainContainer

const styles = StyleSheet.create({

})