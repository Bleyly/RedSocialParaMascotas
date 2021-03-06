import { AntDesign } from "@expo/vector-icons";
import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { users } from "../../../data/users";
import { PostPhoto, ProgressBar } from "../../components/Post";
import { UserInfo } from "../../components";
import { useFireBaseContext } from "../../config/firebase";
import { usePicturesContext } from "../../helpers/picturesContext";

export const ArticuloPost = ({ navigation: { goBack, navigate } }) => {
  const {
    picturesState: [pictures, setPictures],
  } = usePicturesContext();

  const descriptionRef = useRef();
  const quantityRef = useRef();
  const priceRef = useRef();

  const { user } = useFireBaseContext();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
        <Title style={styles.title}>¿Qué vas a publicar?</Title>
      </View>
      <ProgressBar progress={0.5} />

      <View style={styles.container}>
        <UserInfo image={users[0].photo} name={user.displayName} />

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Título"
            onSubmitEditing={() => descriptionRef.current.focus()}
            returnKeyType="next"
          />

          <TextInput
            style={{ marginTop: 8 }}
            ref={descriptionRef}
            mode="outlined"
            label="Descripción"
            returnKeyType="next"
            onSubmitEditing={() => quantityRef.current.focus()}
          />

          <View style={styles.row}>
            <View style={[styles.rowChild, styles.containerLeft]}>
              <TextInput
                ref={quantityRef}
                mode="outlined"
                label="Cantidad"
                onSubmitEditing={() => priceRef.current.focus()}
                returnKeyType="next"
              />
            </View>
            <View style={[styles.rowChild, styles.containerRight]}>
              <TextInput
                ref={priceRef}
                mode="outlined"
                label="Precio"
                returnKeyType="done"
                keyboardType="decimal-pad"
              />
            </View>
          </View>
        </View>

        <PostPhoto navigate={navigate} />
      </View>
      <Button
        mode="contained"
        onPress={() => navigate(names.home)}
        style={styles.end}
      >
        Finalizar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginBottom: 12,
    marginTop: 12,
  },
  back: { marginTop: 5 },
  title: { fontSize: 24, marginLeft: 24 },
  container: { paddingLeft: 16, paddingRight: 16 },
  end: { position: "absolute", bottom: 32, right: 16 },
  form: { marginTop: 16 },
  row: {
    flexDirection: "row",
    marginTop: 8,
  },
  rowChild: { flexGrow: 1 },
  containerLeft: { marginRight: 4 },
  containerRight: { marginLeft: 4 },
});
