import { StyleSheet, Text,Image, View,TextInput,TouchableOpacity,StatusBar,ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import shape from "../images/shape.png"


const Landing = ({navigation}) => {
  return (
    <View style={styles.container} >
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>

    <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>

      <View style={{marginTop:20}}>

      <View style={{alignItems:"center",marginTop:100}}>
<Image source={require('../images/mobile.png')}  ></Image>
</View>

     <View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:80}}>welcome to e-voting system</Text>
      <Text style={{marginTop:15,marginLeft:40,marginRight:40,textAlign:"center"}}>
      vote for your candidate anytime anywhere, simply just login or signup and start voting for you choosen candidate. Good luck!!
      </Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{backgroundColor:"#e29578",padding:15,alignItems:"center",marginTop:40
      ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Get started</Text>
      </TouchableOpacity>
     </View>
        </View> 


    
    
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
container:{
  
 backgroundColor:"#F5F5F5",
 height:"100%"
},

})