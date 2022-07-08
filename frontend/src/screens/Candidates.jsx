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
import profile from '../images/profile.png';


const Candidates = ({ navigation }) => {
  return(
  <View style={styles.container}>
    
      <CardView imageUri={profile} name="candidate1" gender="Female" missionStat="I will make society better"/>
      <CardView imageUri={profile} name="candidate2" gender="male" missionStat="I will make society better"/>
      <CardView imageUri={profile} name="candidate3" gender="Female" missionStat="I will make society better"/>
      <CardView imageUri={profile} name="candidate4" gender="male" missionStat="I will make society better"/>
  
  </View>
  )
};

export default Candidates;

const styles = StyleSheet.create({
 container:{
  width:"100%",
  flexDirection:'row',
  flexWrap:'wrap',
  padding:10,
 },
 
});
