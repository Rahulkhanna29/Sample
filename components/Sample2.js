import React, { useState } from "react";
import { Text, View, Image, Button, TextInput } from "react-native";
import CustomTextInput from "./CustomTextInput";
import styles from "./StyleSheet";

const Sample2=()=>{
   
const [name,setName]=useState('');
const [pass,setPass]=useState('');
const [show ,setShow]=useState(false);

// const storeData=()=>{
   
// }

const getData=()=>{
    setShow(true)
    // AsyncStorage.setItem('user', name)
    // AsyncStorage.getItem('user').then((value)=>{setPass(value)})
}
    return(
        <View style={styles.container}>

{/* <TextInput placeholder="vhgchgcghc gv"    style={{
     alignSelf:'center', width:300, color:'black',marginLeft:20 ,fontSize:15,
     textTransform:'uppercase'
    }}></TextInput> */}

         <Image style={styles.Image} source={require('./asset/download.png')}/>
          <CustomTextInput name='Name' value={name} placeholder='Enter Username' onChangeText={setName}  style={{backgroundColor:'white',marginTop:50}}/>
           <CustomTextInput name='Password' placeholder='Enter Password' onChangeText={setPass} style={ {marginBottom:30}}/>
          <View style={{width:150, alignSelf:'center', marginTop:20, height:80}}>
           <Button onPress={()=>{setShow(true)}}  title="LogIn" fontSize={3} 

            style={{fontSize:5}} />
         { show ? 
             <Text style={{width:'100%', textAlign:'center', alignSelf:'center',fontSize: 15, fontWeight:'bold',color:'black'}}>{name}</Text>

: null}
         
           </View> 
        </View>
    );
}
export default Sample2;

