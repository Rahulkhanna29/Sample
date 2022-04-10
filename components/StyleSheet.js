import React from "react";
import { StyleSheet } from "react-native";
import { hp, wp } from "./FixedSize";

const styles=StyleSheet.create({
    container:{
        // alignSelf:'center',
        justifyContent:'center', 
     
        width:wp(100), height:hp(100),
     
    },
    Image:{
        width:100,
        height:100,
        alignSelf:'center', 
        
    },
    Button:{
        marginTop:100,
        width:100
        
    }
});
export default styles;