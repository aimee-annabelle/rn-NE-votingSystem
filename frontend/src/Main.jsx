import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "./screens/MainContainer";
import AuthNavigator from "./navigation/Authentication";
import Candidates from "./screens/Candidates";
import Home from "./screens/Bottom/Home";
export default function Main() {
  const auth = useSelector((state) => state.counter.authorized);
  return (
    <NavigationContainer>
      {auth?<MainContainer></MainContainer>:<AuthNavigator></AuthNavigator>}
      {/* <Candidates/> */}
      {/* <Home /> */}
    </NavigationContainer>
  );
}
