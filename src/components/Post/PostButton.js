import React from "react";
import { View, Image, StyleSheet } from 'react-native';
import * as Paper from "react-native-paper";

const styles = StyleSheet.create({

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:"#4630eb"
      },
  });

export const PostButton = (props) => {
  return (
    <View style={{flex:1}}>
       <Paper.FAB
        style={styles.fab}
        label="Finalizar"
        onPress={props.publicar}
      />
    </View>
  );
};
