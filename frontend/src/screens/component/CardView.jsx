import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
export default function CardView(props) {
  return (
    <View style={styles.candidate}>
      <Image source={props.imageUri} style={styles.candidateImage} />
      <Text style={styles.candidateText}>{props.name}</Text>
      <Text style={styles.candidateText}>{props.gender}</Text>
      <Text>{props.missionStat}</Text>
      <TouchableOpacity style={styles.vote}>
        <Text style={styles.voteText}>Vote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  candidate: {
    width: 200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  candidateImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  vote: {
    elevation: 8,
    backgroundColor: "#e29578",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin:10,
  },
  voteText:{
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  candidateText:{
    fontSize: 16,
    margin:5,
    fontWeight:'bold'
  }
});
