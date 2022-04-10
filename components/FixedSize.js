import React from "react";
import { Dimensions } from "react-native";

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

export function wp(per){
let c=(per/100)*width;
return c;
}

export function hp(temp){
  let c=(temp/100)*height;
  return c;
  }



// import {Dimensions, PixelRatio} from "react-native";

// const {width, height} = Dimensions.get("window");

// const wp = (number) => {
//     let givenWidth = typeof number === "number" ? number : parseFloat(number);
//     return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
// };

// const hp = (number) => {
//     let givenHeight = typeof number === "number" ? number : parseFloat(number);
//     return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
// };

// export {wp, hp};





