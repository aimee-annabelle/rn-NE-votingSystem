import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import shape from "../images/shape.png";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />


      <View style={{ marginTop: 20 }}>

        <View>
          <Text style={[styles.logo, {fontSize:40}]}>
            e-Vote
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "center",
              marginTop: 80,
            }}
          >
            welcome to e-voting system
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 40,
              marginRight: 40,
              textAlign: "center",
            }}
          >
            vote for your candidate anytime anywhere, simply just login or
            signup and start voting for you choosen candidate. Good luck!!
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonSt}
          >
            <Text style={{ color: "white", fontWeight:"bold",fontSize:16 }}>continue to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    top:"20%",
    backgroundColor: "#edf2f4",
    height: "100%",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonSt: {
    elevation: 8,
    backgroundColor: "#e29578",
    borderRadius: 6,
    height:50,
    padding: 15,
    alignItems: "center",
    margin: 40,
  },
  logo:{
    fontsize:10,
    fontWeight:"bold",
    alignSelf:"center",
    color:"#e29578"
  }
});
