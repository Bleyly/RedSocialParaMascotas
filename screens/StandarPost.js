import React, { useState } from "react";
import { View, Image, StyleSheet } from 'react-native';
import * as Paper from "react-native-paper";
import { PostHeader } from "../components/Post/PostHeader";
import { PostPhoto } from "../components/Post/PostPhoto";

const styles = StyleSheet.create({
  textArea: {
    margin: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:"#4630eb"
  },
});

export const StandarPost = (props) => {

  const [txtPensando, setTxtPensando] = useState('');

  const validarForm = () => {
    alert('gg');
  }

  return (
    <View style={{flex:8}}>
      <PostHeader 
        title="¿Qué vas a publicar?"
        setPublicacion={props.setPublicacion}
        userName={props.userName}>
      </PostHeader>

      <Paper.TextInput 
        multiline
        placeholder="¿Qué estás pensando?"
        onChangeText={txtPensando => setTxtPensando(txtPensando)}
        mode="outlined"
        style={styles.textArea}
      />

    <PostPhoto></PostPhoto>

    <Paper.FAB
      style={styles.fab}
      label="Finalizar"
      onPress={()=>validarForm()}
    />
  </View>
  );
};
