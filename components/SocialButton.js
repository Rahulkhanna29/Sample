import React from "react";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';



useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: '694065643106-h7d245stpjlspege8b5b713ufa7so9f5u.apps.googleusercontent.com',
    });
  }, []);



async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

// const SocialButton=()=>{
//     return(
//         <View style={{marginTop:300}}>
//            <TouchableOpacity  style={styles.button}>
//                 <Text>
//                     Google
//                 </Text>
//             </TouchableOpacity>
           

           
//         </View>
//     );
// }

function GoogleSignIn() {
    return (
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
    );
  }

export default GoogleSignIn;

const styles=StyleSheet.create({
    button:{
        backgroundColor:'#e6eaf4',
        marginTop: 10,
        width: '80%',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf:'center'
    }
});