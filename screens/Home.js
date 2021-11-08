import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { Cards } from "../components/Cards";

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
