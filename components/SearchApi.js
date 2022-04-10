import React, { useEffect, useState } from 'react';
import { FlatList, Text, View , TextInput, StyleSheet, Button, TouchableOpacity, } from 'react-native';



export default SearchApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  console.log(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const searchedText=()=>{
    //   console.log("https://jsonplaceholder.typicode.com/comments/"+text)
    fetch("https://jsonplaceholder.typicode.com/comments/"+text)
    .then((response) => response.json())
    .then((json) => console.log(JSON.stringify(json)))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));    
  }

  

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
     {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text> */}
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Search Api:</Text>
          <TextInput 
          onChangeText={(text)=>setText(text)}
         value={text} 
           placeholder='Search' 
           style={styles.textinput} />
<View>
 <TouchableOpacity onPress={()=>searchedText()} style={styles.Button}>
     <Text style={styles.Button1}>Button</Text>
 </TouchableOpacity>
</View>

           <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.name}</Text>
            )}
            />
        </View>
      )}
    </View>
  );
};

const styles=StyleSheet.create({
    textinput:{
        borderWidth:2,
            borderRadius: 10,
            marginBottom:20
    },
    Button:{
        width:90,
        height:40,
        backgroundColor:'blue',
        alignSelf:'center',
        marginBottom: 20,
        borderRadius:10
    },
    Button1:{
        alignSelf:'center',
        color:'white',
       marginTop:10,
      
    }
});