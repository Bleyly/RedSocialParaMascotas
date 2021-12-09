import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Caption,
  Divider,
  Drawer,
  Paragraph,
  Title,
  TouchableRipple,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { profileTabs } from "../../../helpers/profileTabs";
import { logout } from "../../../redux/users/userActions";
import { names, titles } from "../../../screens";

export const DrawerContent = (props) => {
  const {
    navigation: { navigate },
  } = props;

  const dispatch = useDispatch();
  const { name, currentUser, photo, followers, following } = useSelector(
    (state) => state.userState
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={
                  photo
                    ? { uri: photo }
                    : require("../../../../assets/avatar.png")
                }
              />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>{name}</Title>
                <Caption style={[styles.caption, styles.email]}>
                  {currentUser.email}
                </Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {followers.length}
                </Paragraph>
                <Caption style={styles.caption}>Seguidores</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {following.length}
                </Paragraph>
                <Caption style={styles.caption}>Seguidos</Caption>
              </View>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <TouchableRipple onPress={() => navigate(names.home)}>
            <Drawer.Item icon="home-outline" label={titles[names.home]} />
          </TouchableRipple>
          <TouchableRipple
            onPress={() =>
              navigate(names.profile, {
                tab: profileTabs.publishedPosts,
                userId: currentUser.uid,
              })
            }
          >
            <Drawer.Item icon="account-outline" label="Perfil" />
          </TouchableRipple>
          <TouchableRipple
            onPress={() =>
              navigate(names.profile, {
                tab: profileTabs.savedPosts,
                userId: currentUser.uid,
              })
            }
          >
            <Drawer.Item icon="bookmark-outline" label="Guardados" />
          </TouchableRipple>
          <TouchableRipple onPress={() => console.log("pressed")}>
            <Drawer.Item icon="cog-outline" label="Configuración" />
          </TouchableRipple>
          {/* <TouchableRipple onPress={() => console.log("pressed")}>
            <Drawer.Item icon="account-check-outline" label="Soporte" />
          </TouchableRipple> */}
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section>
        <Divider />
        <TouchableRipple onPress={handleLogout}>
          <Drawer.Item icon="exit-to-app" label="Cerrar Sesión" />
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  email: {
    fontSize: 10,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
});
