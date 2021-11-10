// Importamos todas las librerias necesarias para este componente
import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";

import { Avatar, Card, Paragraph, Divider } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ImageView from "react-native-image-viewing";

import { posts } from "../../../data/posts";

import { users } from "../../../data/users";

import { LikeButton, BookmarkButton } from "./CardButtons";

// Arrow que nos permite poner un avatar con el perfil del usuario
const AvatarComponent = () => (
  <Avatar.Image size={40} source={require("../../../assets/avatar.png")} />
);

// Declaracion en caso de presionar botones en fase de pruebas
const handlePress = () => {
  console.log("pressed");
};

// Subir, Bajar cuenta de Likes
const count = (cantidad) => {
  total = cantidad + 1;
  return total;
};

// Manejo de Card para ventana de publicaciones
export const Cards = () => {
  return posts.map((post) => {
    // const images = [ {uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4"},
    // {uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4"},
    // {uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4"}, ]
    // const [visible, setIsVisible] = useState(false);
    return (
      //! users.map((user) =>
      // Vista tipo Scroll
      // Implementacion de Card para inicio de interfaz)
      <ScrollView
        key={post._id}
        /*key={ user._id }*/ style={{ marginBottom: 8 }}
      >
        <Card>
          <Card.Title
            title="Username"
            /*{ user.username }*/ left={AvatarComponent}
          />
          <Card.Content>
            <Paragraph style={{ marginBottom: 15 }}>
              Insertar comentario
            </Paragraph>
            {/* <ImageView
                images={images}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
              /> */}
            <Card.Cover
              style={{ width: null, resizeMode: "contain", height: 320 }}
              source={
                /*require('../assets/imagen.jpg')*/ post.photos[
                  (Math.random() * 3).toFixed(0)
                ]
              }
            />
          </Card.Content>
          <Card.Content style={{ flex: 1, flexDirection: "row" }}>
            <Text style={{ flex: 1, alignContent: "flex-end" }}>
              {post.likes} Me gusta
            </Text>
            <Text>{(Math.random() * 10000).toFixed(0)} Comentarios</Text>
          </Card.Content>
          <Divider style={{ height: 3, marginBottom: 15 }} />
          <Card.Actions
            style={{
              flex: 1,
              marginTop: -15,
              marginLeft: 8,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <LikeButton onPress={count} />
            </View>
            <View style={{ flex: 1 }}>
              <MaterialCommunityIcons
                name="comment-text-outline"
                size={32}
                color="black"
                onPress={handlePress}
              />
            </View>
            <View style={{ flex: 8 }}>
              <MaterialCommunityIcons
                name="share-outline"
                size={32}
                color="black"
                onPress={handlePress}
              />
            </View>
            <View>
              <BookmarkButton />
            </View>
          </Card.Actions>
        </Card>
      </ScrollView>
    ); // )
  });
};
