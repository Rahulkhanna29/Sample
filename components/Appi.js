// import React, {useState, useEffect} from "react";

// import { View, Text , StyleSheet, FlatList, ActivityIndicator} from "react-native";

// // const movieURL="https://jsonplaceholder.typicode.com/todos";

// // const Appi=()=>{
// // const [isLoading,setLoading]=useState(true);
// // const [data, setData]= useState([]);

// // useEffect(()=>{
// //     fetch('https://jsonplaceholder.typicode.com/todos')
// //     .then((response)=>response.json())
// //     .then((res)=>setData(res))
// //     .catch((error)=>alert(error))
// //     .finally(setLoading(false));
// // },([]))

// //     return(
// //     <View style={styles.container}>

// //            </View>
// // )}

// // export default Appi;


// const Appi =()=>{

//     useEffect(()=>{

//         fetch(
//             "https://jsonplaceholder.typicode.com/todos")
//                         .then((res) => res.json())
//                         .then((json) => {
//                            setData(json)
//                            setLoading(false)
//                         })
//                         .catch((err)=>{
//                             setLoading(false)
//                             console.log('err '+JSON.stringify(err))
//                         })
//     },([]))


//     const [isLoading,setLoading]=useState(true);
// const [ssss, setData]= useState([]);

//     return (
//         <View style={styles.container}>
//        {isLoading ? (<ActivityIndicator />) : (
//           <FlatList 
//           data={[...ssss]} 
//         keyExtractor={({id},index)=>id}
//         renderItem={({item})=>{      
//                   <Text>{item.title}</Text>
//           }}
//           />
//        )}
//             </View>
//     )
// }

// export default Appi

// const styles=StyleSheet.create({
//     container:{
//         flex:1,

//     }
// });

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};