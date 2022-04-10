import React, {useState,useEffect} from 'react';
import { 
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid , Text, Image, TextInput,   } from 'react-native';
import Contacts from 'react-native-contacts';
import { hp, wp } from "./FixedSize";

const Mycontact = () => {
    const [myContacts, setMycontacts] = useState([]);
    const [searchedText, setSearchedText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
       getAllContact();
    }, []);

    myContacts.sort(function (a, b) { return a - b });


    const onChangeText = (text) => {
      setSearchedText(text)
      if (text.length > 0) {
        var array=[]
        myContacts.map((item)=>{
          if(item.givenName.includes(text) || item.phoneNumbers[0]?.number.includes(text))
          {
               array.push(item)
          }
        })
        // const filteredData = myContacts.filter(item => {
        //   if(item.phoneNumbers[0]?.number!==undefined){

        //     const itemData = item.phoneNumbers[0]?.number.toUpperCase();
        //     const textData = text.toUpperCase();
        //     return itemData.indexOf(textData) > -1
        //   }
         
        // });
      //   let filtered = [...myContacts];

        
      //  const filteredData = filtered 
      //   .filter(post => post.givenName.toUpperCase().indexOf(givenName.toUpperCase()) !== -1)
      //   .filter(post => post.phoneNumbers[0]?.number.toUpperCase().indexOf(phoneNumbers[0]?.number.toUpperCase()) !== -1)
      

        setFilteredData([...array])
      }
      else {
        setFilteredData([])
      }
    }

    async function getAllContact(){
      try{
        
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            'title': 'Contacts',
            'message': 'This app would like to view your contacts.',
            'buttonPositive': 'Please accept bare mortal'
          }
          
        );
        // if(permission === PermissionsAndroid.RESULTS.GRANTED){
        //   const contacts = await Contacts.getAll();
        //   console.log('mikjeeee', JSON.stringify(contacts));
        //   setMycontacts(contacts);
        // }
        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
          const contacts = await Contacts.getAll();
          let sortedArr = contacts.sort((a, b) => {
            let aName = a.givenName || a.displayName;
            let bName = b.givenName || b.displayName;
            return aName > bName
          })
  
          setMycontacts(sortedArr);
        }
        else{
          console.log("Permission Denied");
          
        }
      }catch(error){
        console.log(error);
      }
    }

    return (
        <View style={{height:'100%', width:'100%', backgroundColor:'white'}}>
     <View style={{height:hp(16), width:'100%',}}>
      <Text style={styles.headingtext}>
        MyContacts
      </Text> 

<TextInput value={searchedText} onChangeText={(text) => { onChangeText(text) }} placeholder='Search Contact' style={styles.TextInput} />
</View>
             <FlatList
            data={searchedText.length > 0 ? filteredData : [...myContacts]}
          
            renderItem={({item})=>{
// alert(JSON.stringify(item))
              return(
                <TouchableOpacity 
           style={{width:'80%',height:100, alignSelf:'center'}}
           > 
            


      <View style={styles.profile2} >
       
       
          {item.hasThumbnail === true ?    
         <Image style={{height: 60,alignSelf:'center', borderWidth:1, borderColor:'transparent', borderRadius:50 , width: 60, marginLeft:20}} 
         source={{uri : item?.thumbnailPath}} />


: <Image source={require('./asset/contact.png')} style={styles.image1}></Image>}
           
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text}>{item?.givenName || item?.displayName || 'csdbvmdsb'} </Text>

          <Text style={{ color: '#ba55d3', marginTop: 3, marginLeft:15 }}>{item?.phoneNumbers[0]?.number} </Text>
        </View>
      </View>
               </TouchableOpacity>
              )
            }}
            /> 
        </View>
    );
}

const styles= StyleSheet.create({
  Text1:{
  alignSelf:'center'
  },
  profile2: {
    width: wp(80),
    height:hp(12),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    shadowColor: 'grey',
    shadowOpacity: 12,
    elevation: 20,
  
  },  image2: {
    width: 15,
    height: 15,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 60,
    marginRight: 20
  
  },
  text: {
    marginTop: hp(2.5),
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:15,
    color: 'black'
  },
  image1: {
    width: wp(15),
    height: hp(8),
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    marginTop: 15,
    marginLeft: 15
  },
  leftElementContainer: {
   
   
    paddingLeft: 13,
  },
  headingtext: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    paddingTop: '2.5%',
    color:'black',
    
  },
  TextInput:{
    alignSelf:'center',
    borderWidth:2,
    borderRadius: 10,
    width:wp(80),
    marginTop: 15,
          }
  })

export default Mycontact;