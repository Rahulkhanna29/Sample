import React from "react";
import { Image, Text, View, TextInput } from "react-native";

const CustomTextInput=(prop)=>{
    return(
        <View style={[{width:'80%',flexDirection:'row',height:50,alignSelf:'center', borderWidth:2,marginTop: 10, borderRadius:15, marginBottom:10},prop.style]}>
    <Text style={[{width:'30%', textAlign:'center', alignSelf:'center',fontSize: 15, fontWeight:'bold',color:'black'},prop.textStyle]}>{prop.name}</Text>
        <TextInput   
 placeholder={prop.placeholder} onChangeText={prop.onChangeText} style={[{
     alignSelf:'center', width:'70%', color:'black',marginLeft:20 ,fontSize:15,
     textTransform:'capitalize'
    },prop.inputstyle]}></TextInput>
        </View>
    );
}
export default CustomTextInput;