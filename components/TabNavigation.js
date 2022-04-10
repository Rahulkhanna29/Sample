import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Sessions from "../components/Sessions";
import Routines from "../components/Routines";
import Abouts from "../components/About";
import { ChooseTopic } from "./ChooseTopic";

const Tab=createMaterialTopTabNavigator()

 const TabNavigation=()=>{
    return(
      <Tab.Navigator
      screenOptions= {{ 
        tabBarIndicatorStyle:{backgroundColor:'yellow',width:80, marginLeft:25},
        tabBarStyle:{backgroundColor:'black'},
        style: {
          elevation:0,
          shadowOpacity:0,
          borderWidth:0,
          backgroundColor: 'black'},
          tabBarLabelStyle:{color:'white'}
          }}
         >
          
      
          <Tab.Screen name='Sessions' component={Sessions}/>
          <Tab.Screen name='Routines' component={Routines}/>
          <Tab.Screen name='Abouts' component={Abouts}/>
      </Tab.Navigator>
    )
}
export default TabNavigation;