import React from 'react';
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import FixedSize from './FixedSize';
import { Dimensions } from 'react-native';
import { wp, hp } from './FixedSize';

const Sample = () =>{ 
  return(
    <View >
       
        <TouchableOpacity  style={styles.text1}>
          <Text>rk</Text>
        </TouchableOpacity>
    </View>
);
}
export default Sample;

const styles = StyleSheet.create({
  text1: {
    height:hp('10%'), borderWidth:2, width:wp('50%'), alignSelf:'center', justifyContent:'center',
    marginTop: 100, 
  }
  });