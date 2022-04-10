// import React from 'react';
// import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
// import { colors } from '../components/colors';
// import {styles} from '../components/styles';


// const topics = [
//   {
//     title: 'Reduce Stress',
//     url: require('./asset/water.webp'),
//     background: '#A3ABFF',
//     labelColor: '#FEF9F3',
//   },
//   // {
//   //   title: 'Improve Perfomance',
//   //   url: require('./asset/topic1cardbg.png'),
//   //   background: '#FA6E5A',
//   //   labelColor: '#FEF9F3',
//   // },
//   // {
//   //   title: 'Increase Happiness',
//   //   url: require('./asset/topic1cardbg.png'),
//   //   background: '#FEB18F',
//   //   labelColor: '#3F414E',
//   // },
//   // {
//   //   title: 'Reduce Anxiety',
//   //   url: require('./asset/topic1cardbg.png'),
//   //   background: '#FFCF86',
//   //   labelColor: '#3F414E',
//   // },
//   // {
//   //   title: 'Personal Growth',
//   //   url: require('./asset/topic1cardbg.png'),
//   //   background: '#6CB28E',
//   //   labelColor: '#FFECCC',
//   // },
//   // {
//   //   title: 'Lorem Ipsum',
//   //   url: require('./asset/topic1cardbg.png'),
//   //   background: '#3F414E',
//   //   labelColor: '#EBEAEC',
//   // },
//   // {
//   //   title: 'Better Sleep',
//   //   url: require('./asset/topic1cardbg.png'),
//   //   background: '#3F414E',
//   //   labelColor: '#EBEAEC',
//   // },
// ];

// export const Routines = () => {
//   return (
//     <View style={styles.container}>
    
//       <View style={styles.headingWrapper}>
//         <Text style={styles.heading}>What Brings You</Text>
//         <Text style={styles.subHeading}>to Silent Moon</Text>
//         <Text style={styles.title}>choose a topic to focuse on:</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
//         <View style={styles.row}>
//           <View>
//             {topics.map((item, index) => {
//               if (index % 2 == 0) {
//                 return (
//                   <View
//                     style={[
//                       styles.card,
//                       {
//                         backgroundColor: item.background,
//                         marginRight: 15,
//                         marginBottom: 15,
//                       },
//                     ]}>
//                     <Image style={styles.topicImage} source={item.url} />
//                     <Text style={[styles.label, {color: item.labelColor}]}>
//                       {item.title}
//                     </Text>
//                   </View>
//                 );
//               }
//             })}
//           </View>
//           <View style={{flex: 1}}>
//             {topics.map((item, index) => {
//               if (index % 2 != 0) {
//                 return (
//                   <View
//                     style={[
//                       styles.card,
//                       {
//                         backgroundColor: item.background,

//                         marginBottom: 15,
//                       },
//                     ]}>
//                     <Image style={styles.topicImage} source={item.url} />
//                     <Text style={[styles.label, {color: item.labelColor}]}>
//                       {item.title}
//                     </Text>
//                   </View>
//                 );
//               }
//             })}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

import React from 'react';
import MasonryList from "react-native-masonry-list";
 
export default function Routines(){

    return (
        <MasonryList
    
        imageContainerStyle={{
          borderRadius: 18,
          borderWidth: 4,
          borderColor: '#fff',
          overflow: 'visible'
        }}
            images={[
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                // { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                // to include a dimensions field with the
                // actual width and height of the image or
                // it will throw an error.
                { source: require('./asset/water.webp'),
                text:'Rahul',
                    dimensions: { width: 1000, height: 1300 }
                },
                
                // "width" & "height" is an alternative to the dimensions
                // field that will also be acceptable.
                { source: require('./asset/sky5.webp'),
                    width: 1080,
                    height: 1920,
             
                  },
              
                    { source: require('./asset/sky.webp'),
                    width: 1080,
                    height: 1920 },
                    { source: require('./asset/sky2.webp'),
                    width: 1080,
                    height: 1920 },
                    { source: require('./asset/sky3.webp'),
                    width: 1080,
                    height: 1920 },
                    { source: require('./asset/sky4.webp'),
                    width: 1080,
                    height: 1920 },
            ]}
            // Version *2.14.0 update
            // onEndReached={() => {
            //     // add more images when scrolls reaches end
            // }}
        />
       
    );
}
















































































// import React, { Component } from "react";
// import { Image, Text, View, Dimensions, RefreshControl, Alert } from "react-native";
// const { width } = Dimensions.get("window");
// const columnWidth = (width - 10) / 2 - 10;
// import Masonry from "react-native-masonry-list";

// export class Routines extends Component {
  
//   componentDidMount() {
//     this.load();
//   }

//   load() {
//     let data = [
//       {
//         image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
//         text: "Test",
//         key: 1,
//       },
//       {
//         image: "https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg",
//         text: "Image1",
//         key: 1,
//       },
//       {
//         image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
//         text: "Image1",
//         key: 1,
//       },
//       {
//         image: "https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=",
//         text: "Image3",
//         key: 1,
//       },
//       {
//         image: "https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg",
//         text: "Image1",
//         key: 1,
//       },
//     ]
//   }

//   //   let last = data.length
//   //   let new_data = []
//   //   data.map((item, index) => {
//   //     let height = 100
//   //     if (index === 0) {
//   //       console.log(index, ":", 150)
//   //     } else if (index === last - 1 && last % 2 == 0) {
//   //       console.log(index, ":", 150)
//   //     }
//   //     else {
//   //       console.log(index, ":", 250)
//   //       height = 200
//   //     }

//   //     new_data.push(
//   //       {
//   //         image: item.image,
//   //         height: height,
//   //         text: item.text,
//   //       }
//   //     )

//   //     if (index === last - 1 && last % 2 !== 0) {
//   //       new_data.push(
//   //         {
//   //           image: "https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png",
//   //           height: 100,
//   //           text: "No data "
//   //         }
//   //       )
//   //     }

//   //   })

    
//   //   this.list.addItems(new_data);
//   // }


//   render() {
//     return <View style={{ display: 'flex', flex: 1, backgroundColor: "#EEE" }}>
//       <Masonry
//         style={{ flex: 1, borderWidth: 1, borderColor: "red" }}
//         columns={2} ref="list"
//         containerStyle={{ padding: 5 }}
//         renderItem={item => <View
//           style={{
//             margin: 5,
//             backgroundColor: "#fff",
//             borderRadius: 5,
//             overflow: "hidden",
//             borderWidth: 1,
//             borderColor: "#dedede"
//           }}>
//           <Image source={{ uri: item.image }} style={{ height: item.height }} />

//           <Text style={{ padding: 5, color: "#444" }}>{item.text}</Text>
//         </View>} />
//     </View>
//   }
// }

// export default Routines;