import { AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "react-native-paper-dropdown";
import { animals } from "../../../data/animals";
import { races } from "../../../data/races";
import { users } from "../../../data/users";
import { UserInfo } from "../../components";
import { PostPhoto, ProgressBar } from "../../components/Post";
import { usePicturesContext } from "../../helpers/picturesContext";
import { names } from "../names";
import { createPost } from "../../redux/posts/postActions";
import { tags } from "../../helpers/tags";

export const RegalarPost = ({ navigation: { goBack, navigate } }) => {
  const {
    picturesState: [pictures, setPictures],
  } = usePicturesContext();

  const ageRef = useRef();
  const quantityRef = useRef();

  const [showAnimals, setShowAnimals] = useState(false);
  const [showRaces, setShowRaces] = useState(false);

  const [name, setName] = useState();
  const [animal, setAnimal] = useState();
  const [race, setRace] = useState();
  const [age, setAge] = useState();
  const [quantity, setQuantity] = useState();

  const dispatch = useDispatch();
  const { username, photo } = useSelector((state) => state.userState);

  const handleSave = () => {
    dispatch(
      createPost(
        {
          description: `Se regala ${animal} ${race} de ${age} meses llamado ${name.trim()}.`,
          tag: tags.adopt,
          likes: 0,
          comments: [],
        },
        pictures
      )
    ).then(() => {
      setPictures([]);

      navigate(names.home);
    });
  };

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
        <UserInfo
          image={photo ? { uri: photo } : require("../../../assets/avatar.png")}
          name={username}
        />

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Nombre del animal"
            onSubmitEditing={() => ageRef.current.focus()}
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.row}>
            <View style={[styles.rowChild, styles.containerLeft]}>
              <DropDown
                label="Tipo de animal"
                mode="outlined"
                visible={showAnimals}
                showDropDown={() => setShowAnimals(true)}
                onDismiss={() => setShowAnimals(false)}
                value={animal}
                setValue={setAnimal}
                list={animals}
              />
            </View>
            <View style={[styles.rowChild, styles.containerRight]}>
              <DropDown
                label="Raza"
                mode="outlined"
                visible={showRaces}
                showDropDown={() => setShowRaces(true)}
                onDismiss={() => setShowRaces(false)}
                value={race}
                setValue={setRace}
                list={races}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.rowChild, styles.containerLeft]}>
              <TextInput
                ref={ageRef}
                mode="outlined"
                label="Edad"
                onSubmitEditing={() => quantityRef.current.focus()}
                returnKeyType="next"
                value={age}
                onChangeText={setAge}
              />
            </View>
            <View style={[styles.rowChild, styles.containerRight]}>
              <TextInput
                ref={quantityRef}
                mode="outlined"
                label="Cantidad"
                returnKeyType="done"
                value={quantity}
                onChangeText={setQuantity}
              />
            </View>
          </View>
        </View>

        <PostPhoto navigate={navigate} />
      </View>
      <Button mode="contained" onPress={handleSave} style={styles.end}>
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
