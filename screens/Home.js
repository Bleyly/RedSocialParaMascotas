import React from "react";
import { ScrollView, View } from "react-native";
import { Cards } from "../components/Card";

export const Home = () => {
  return (
    <ScrollView>
      <View
        style={
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }
        }  
      >
      </View>
      <Cards/>
    </ScrollView>
  );
};
