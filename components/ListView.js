import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native'
import React, { useState } from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import MasonryList from '@react-native-seoul/masonry-list';


const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width
const ListView = () => {
  const [data] = useState([
    {
      id: 'id123',
      imgURL:
        'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
      text: 'Pioneer LHS Chaise Lounger in Grey Colour',
      height: 250
    },
    {
      id: 'id124',
      imgURL:
        'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
      text: 'Precedant Furniture',
      height: 300
    },
    {
      id: 'id125',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
      text: 'Leverette Upholstered Platform Bed',
      height: 250

    },
    {
      id: 'id126',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
      text: 'Briget Accent Table',
      height: 320
    },

    {
      id: 'id127',
      text: 'Briget Accent Table',
    },

    {
      id: 'id128',
      text: 'Briget Accent Table',
    },

  ])

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  const renderItem = ({ item, index }) => {
    // const randomBool =  Math.random() < 0.5 ? true : false 
    // console.log(randomBool)
    return (
      item.imgURL ?
        <ImageBackground
          source={{ uri: item.imgURL }}
          resizeMode='cover'
          key={item.id} style={{
            marginTop: 12,

            height: item.height ? item.height : null,
            borderWidth: 1, borderColor: 'grey',
            borderRadius: 10, margin: 2,
            justifyContent: 'flex-end',
            overflow: 'hidden'
          }}>

          <Text
            style={{
              marginTop: 8,
              paddingBottom: 20, textAlign: 'center',
              //  textTransform:'
            }}
          >
            {item.text}
          </Text>

        </ImageBackground>
        : <View style={{
          backgroundColor: 'yellow', width: '70%', alignSelf: 'center', height: 50, borderColor: 'white', borderRadius: 10,
          shadowColor: '#000000', justifyContent: 'center',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          marginVertical: 5,
          elevation: 7, borderWidth: 1
        }}>

          <Text style={{
            textAlign: 'center'
          }}>{item.text}</Text>
        </View>
    );
  };

  return (
    <View style={{ height: ScreenHeight, width: ScreenWidth }}>
      <StatusBar barStyle={'dark-content'} />
      <MasonryList
        ListHeaderComponent={<View >
          <Text>jhghghjg</Text>
          </View>}
        contentContainerStyle={{
          paddingHorizontal: 24,
          // backgroundColor:'red',
          alignSelf: 'stretch',
        }}
        style={{
          // height:ScreenHeight, width: ScreenWidth 
        }}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListView;