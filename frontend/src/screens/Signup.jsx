import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image,Modal } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


const Signup = ({navigation}) => {

    const [email,setEmail]=useState("");
    const [nid,setNid]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [modalVisible, setModalVisible] = useState(false);
const register=async()=>{
 await axios.post("http://192.168.0.116:5000/user/register",{
    email:email,
    name:name,
    nid:pass
  })
  .then(res=>{

navigation.navigate("Login")


  }).catch(err=>{
    setModalVisible(true)

  })
}
  return (
    <View style={styles.container}>
      <Modal
     
     animationType="fade"
     transparent={true}
     visible={modalVisible}
     onRequestClose={() => {
       setModalVisible(!modalVisible);
     }}
   >
     <View  style={{height:"25%",marginTop:"30%" , marginLeft:20,marginRight:20 , backgroundColor:"white",alignItems:"center",justifyContent:"center",}}>
     <Text>Double check your inputs, or maybe the email is taken</Text>
     <TouchableOpacity onPress={()=>setModalVisible(false)} style={{backgroundColor:"tomato",marginTop:40,padding:10,paddingHorizontal:50}}>
          <Text style={{color:"white"}}>Close</Text>
        </TouchableOpacity>
     </View>
   
   </Modal>

      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Welcome</Text>
      <Text style={{marginTop:15,marginLeft:40,marginRight:40,textAlign:"center"}}>
      create new Account here
      </Text>
      


<View style={{marginTop:40}}>
  <View>
   
  <TextInput
        style={styles.input}
         onChangeText={newName=>{setName(newName); }}
         value={name}
        placeholder="Enter names"
        keyboardType="default"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newEmail=>setEmail(newEmail)}
        value={email}
        placeholder="Enter email"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newPhone=>setPhone(newPhone)}
        value={phone}
        placeholder="Enter phone"
        keyboardType="default"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newNid=>setNid(newNid)}
        value={nid}
        placeholder="Enter nid"
        
      />
  </View>



</View>


<TouchableOpacity onPress={()=>register()} style={{backgroundColor:"#e29578",padding:15,alignItems:"center"
     ,marginTop:40 ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity>

      <View style={{alignItems:"center",marginTop:40}}>
  <View style={{flexDirection:"row"}}>
  <Text>Have an account ?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
<Text style={{color:"#e29578",marginLeft:5}}>Login</Text>
</TouchableOpacity>
  </View>

</View>
     
    </View>

  )
}

export default Signup;

const styles = StyleSheet.create({
  text:{
    marginLeft:47,
  },
  input: {
    height: 50,
    marginTop:10,
    marginLeft:40,
    marginRight:40,
   
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10,
    backgroundColor:"white"
  },
  container:{
    justifyContent: "center",
    top:'10%'
  }
})