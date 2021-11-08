import React, { useState } from "react";
import { View, Image, StyleSheet } from 'react-native';
import * as Paper from "react-native-paper";
import { PostHeader } from "../components/Post/PostHeader";
import { PostPhoto } from "../components/Post/PostPhoto";
import DropDown from "react-native-paper-dropdown";

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

export const RegalarPost = (props) => {

  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);

  const [txtNombre, setTxtNombre] = useState('');
  const [slcTipo, setTipo] = useState();
  const [slcRaza, setRaza] = useState();
  const [txtEdad, setTxtEdad] = useState();
  const [txtCantidad, setTxtCantidad] = useState();

  const TipoAnimalList = [
    {
      label: "Gato",
      value: 1,
    },
    {
      label: "Perro",
      value: 2,
    },
    {
      label: "Ganado",
      value: 3,
    },
  ];
  const TipoRazaList = [
    {
      label: "Viralata",
      value: 1,
    },
    {
      label: "Puro",
      value: 2,
    },
  ];

  return (
    <View style={{flex:1}}>
      <PostHeader 
        title="¿Qué vas a publicar?"
        setPublicacion={props.setPublicacion}
        userName={props.userName}>
      </PostHeader>

      <Paper.TextInput
        label="Nombre del Animal"
        mode="outlined"
        onChangeText={txtNombre => setTxtNombre(txtNombre)}
        style={styles.textArea}
      />

    <View style={{flex: 0, flexDirection: 'row'}}>
        <View style={{
          flexGrow: 1,
        }}>
          <Paper.TextInput
            label="Edad"
            mode="outlined"
            onChangeText={txtEdad => setTxtEdad(txtEdad)}
            style={styles.textArea}
          />
        </View>
        <View style={{
          width: '40%',
        }}>
          <Paper.TextInput
            label="Cantidad"
            mode="outlined"
            onChangeText={txtCantidad => setTxtCantidad(txtCantidad)}
            style={styles.textArea}
          />       
        </View>
      </View>

      <View style={{flex: 0, flexDirection: 'row'}}>
        <View style={{
          flexGrow: 1,margin:10
        }}>
            <DropDown
              label={"Tipo de Animal"}
              mode={"outlined"}
              visible={showDropDown1}
              showDropDown={() => setShowDropDown1(true)}
              onDismiss={() => setShowDropDown1(false)}
              value={slcTipo}
              setValue={setTipo}
              list={TipoAnimalList}
            />
        </View>
        <View style={{
          width: '40%',margin:10
        }}>
            <DropDown
              label={"Raza"}
              mode={"outlined"}
              visible={showDropDown2}
              showDropDown={() => setShowDropDown2(true)}
              onDismiss={() => setShowDropDown2(false)}
              value={slcRaza}
              setValue={setRaza}
              list={TipoRazaList}
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
