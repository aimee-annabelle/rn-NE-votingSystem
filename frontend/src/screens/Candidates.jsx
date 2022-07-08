import {
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

import React from "react";
import { Card } from "react-native-elements";
import CardView from "./component/CardView";


const Candidates = ({ navigation }) => {
  return(
  <View style={styles.container}>
    <ScrollView>
      <CardView/>
      <CardView/>
      <CardView/>
    </ScrollView>
  </View>
  )
};

export default Candidates;

const styles = StyleSheet.create({
 container:{
  display:'row',
  height:'100%',
 },
 
});
