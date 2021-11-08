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

export const ArticuloPost = (props) => {

  const [txtTitulo, setTxtTitulo] = useState();
  const [txtDescripcion, setTxtDescripcion] = useState();
  const [txtCantidad, setTxtCantidad] = useState();
  const [txtPrecio, setTxtPrecio] = useState();

  return (
    <View style={{flex:1}}>
      <PostHeader 
        title="¿Qué vas a publicar?"
        setPublicacion={props.setPublicacion}
        userName={props.userName}>
      </PostHeader>

      <Paper.TextInput
        label="Titulo"
        mode="outlined"
        onChangeText={txtTitulo => setTxtTitulo(txtTitulo)}
        style={styles.textArea}
      />
      <Paper.TextInput 
        multiline
        placeholder="Descripcion"
        mode="outlined"
        onChangeText={txtDescripcion => setTxtDescripcion(txtDescripcion)}
        style={styles.textArea}
      />

      <View style={{flex: 0, flexDirection: 'row'}}>
        <View style={{
          flexGrow: 1,
        }}>
          <Paper.TextInput
            label="Cantidad"
            mode="outlined"
            onChangeText={txtCantidad => setTxtCantidad(txtCantidad)}
            style={styles.textArea}
          />
        </View>
        <View style={{
          width: '40%',
        }}>
          <Paper.TextInput
            label="Precio"
            mode="outlined"
            onChangeText={txtPrecio => setTxtPrecio(txtPrecio)}
            style={styles.textArea}
          />       
        </View>
      </View>
      
      <PostPhoto></PostPhoto>

      <Paper.FAB
        style={styles.fab}
        label="Finalizar"
        onPress={()=>alert('test')}
      />
      
  </View>
  );
};
