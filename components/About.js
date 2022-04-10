import React from 'react';
import { View, Text, StyleSheet,Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native';
import { useMemo } from 'react';



const data = ([
  
       require('./asset/water.webp'),

  
     require('./asset/sky.webp'),

    require('./asset/sky2.webp'),
     require('./asset/sky3.webp'),
     require('./asset/sky4.webp'),
     require('./asset/sky5.webp'),

]);


const Abouts=()=>{



    const renderView=({ item }) => {
        const randomBool =  Math.random()
    


        return (
            // <View style={styles.viewRow}>
                <ImageBackground resizeMode='cover' source={item} style={[styles.image, { height: randomBool< 0.5 ? 150 : 300, marginTop: 10, }]}>
                    <Text style={styles.Text}>
                        rahul khanna +{randomBool}
                    </Text>
                    </ImageBackground>
                //     {/* <ImageBackground source={item} style={[styles.image, { height: randomBool ? 150 : 300, marginTop: 10 }]}>
                //     <Text style={styles.Text}>
                //         rahul
                //     </Text>
                //     </ImageBackground>   */}
                // {/* <Image source={item} style={[styles.image, { height: 300, marginTop: 10 }]} /> */}
            // </View>
        )
    }
    return(
        <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        // CellRendererComponent={({ children, item, ...props }) => {
        //     return (
        //         <View {...props} style={{ marginTop: item.marginTop }}>
        //             {children}
        //         </View>
        //     )
        // }}
        renderItem={renderView}
    />
</View>
    )
}
export default Abouts;


   
const styles= StyleSheet.create({
container: {
       flex: 1,
       alignSelf:'center'
    },
    flatList: {
       width: '100%',
       height: '100%'
    },
    viewRow: {
       flexDirection: 'row'
    },
    image: {
   
        resizeMode: 'cover',
        borderRadius: 18,
        marginHorizontal:5,
width:180,
height:200    
}, 
Text:{
    marginTop: 50,
}
 });





 