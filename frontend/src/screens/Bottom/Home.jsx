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
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { useEffect } from "react";
import axios from "axios";
import Candidates from "../Candidates";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hold, setHold] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get("http://10.0.2.2:4300/candidate/get-all")
      .then((res) => {
        addData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [task, setTask] = useState("");

  const updateData = (index) => {
    let placeHolderObject = data;

    placeHolderObject[index].done = !placeHolderObject[index].done;

    setData(placeHolderObject);
  };

  function addData(value) {
    let placeHolderObject = value;
    placeHolderObject.push(value);
    // console.log(placeHolderObject[0]);
    setData(placeHolderObject);
  }

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View>
        <Image
          source={require("../../images/shape.png")}
          style={{ width: 200, margin: 0 }}
          resizeMode="cover"
        ></Image>
      </View>

      <View>
        <View style={styles.box}>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              color: "#fff",
              fontSize: 20,
              marginBottom: 15,
            }}
          >
            Candidates List
          </Text>
          <View
            style={{ alignItems: "center", justifyContent: "center" }}
          ></View>
          <ScrollView>
            {/* {data.map((item, counter) => (
              <View style={{ flexDirection: "row" }} key={counter}>
                <Text style={{ marginTop: 18 }}>{item.name}</Text>
                <Candidates/>
                <View></View>
              </View>
            ))} */}
          </ScrollView>
        </View>
        <ScrollView>
          <Candidates/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    height: "100%",
  },
  box: {
    backgroundColor: "#e29578",

    shadowOpacity: 1,
    shadowRadius: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    height: 50,
    width: "80%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    backgroundColor: "white",
  },
});
