import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput} from "react-native"
export default function CardView(){
    return(
        <View style={styles.candidate}>
        <Text>This is a candidate card</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    candidate:{
        width:'40%',
        shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          shadowOpacity: 0.26,
          elevation: 8,
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10
       },
       
})