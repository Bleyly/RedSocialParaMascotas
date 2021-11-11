import { AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { animals } from "../../../data/animals";
import { races } from "../../../data/races";
import { users } from "../../../data/users";
import { UserInfo } from "../../components";
import { PostPhoto, ProgressBar } from "../../components/Post";
import { names } from "../names";

export const VenderPost = ({ navigation: { goBack, navigate } }) => {
  const ageRef = useRef();
  const quantityRef = useRef();
  const priceRef = useRef();

  const [showAnimals, setShowAnimals] = useState(false);
  const [showRaces, setShowRaces] = useState(false);

  const [animal, setAnimal] = useState();
  const [race, setRace] = useState();

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
        <UserInfo image={users[0].photo} name={users[0].name} />

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Nombre del animal"
            onSubmitEditing={() => ageRef.current.focus()}
            returnKeyType="next"
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
              />
            </View>
            <View style={[styles.rowChild, styles.containerCenter]}>
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

        <PostPhoto />
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginBottom: 12,
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
  containerCenter: { marginLeft: 4, marginRight: 4 },
  containerRight: { marginLeft: 4 },
});
