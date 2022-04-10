import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabNavigation from '../components/TabNavigation';


const Home=()=>{
    return(
       <NavigationContainer>
           <TabNavigation/>
       </NavigationContainer>
    )
}
export default Home;