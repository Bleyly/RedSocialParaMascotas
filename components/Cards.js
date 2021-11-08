import React, { useState } from 'react';

import {  ScrollView,
          Pressable,
          View,
          StyleSheet,
          Animated,
          Dimensions
        } from 'react-native';

import {  Avatar,
          Card, 
          Paragraph,
          Divider,
        } from 'react-native-paper';

import {  posts } from '../data/posts';

import {  FontAwesome5,
          Feather,
          MaterialCommunityIcons,
        } from '@expo/vector-icons';

        const screen = Dimensions.get('window');

import { PinchGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screen.width,
    height: screen.width,
  },
});

const AvatarComponent = () => (
  <Avatar.Image size={40} source={require('../assets/avatar.png')} />
);

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "red" : "black"}
      />
    </Pressable>
  );
};

export const Cards = () => {
  scale = new Animated.Value(1);
  onPinchEvent = Animated.event([{ nativeEvent: { scale: this.scale } }], {
    useNativeDriver: true,
  });
  
  return(
    posts.map((post) => {
      return (
        <ScrollView
          pinchGestureEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container} >{
            <Card key={ post._id } style={{ marginBottom:8 }}>
              <Card.Title title="El Perrazo"
              /* subtitle="Card Subtitle" */
              left={AvatarComponent} />
              <Card.Content>
                {/* <Title>Card title</Title> */}
                <Paragraph style={{ marginBottom:15 }}>Insertar comentario</Paragraph>
              </Card.Content>
              <Card.Cover 
                style= {{ width: null,
                          resizeMode: 'contain',
                          height: 320 }}  
                source={require('../assets/imagen.jpg')}
              />
              <PinchGestureHandler>

              </PinchGestureHandler>
              <Card.Content>
                {/* <Title>Card title</Title> */}
                <Paragraph>{post.likes}
                &nbsp;&nbsp;Me gusta</Paragraph>
              </Card.Content>
              <Divider style={{height:3, marginBottom:15}}/>
              <Card.Actions style={{marginTop:-15, marginLeft:8}}>
              <LikeButton/>
                
                <FontAwesome5 name="comment-alt" size={24} color="black" />
                <FontAwesome5 name="share" size={24} color="black" />
                <Feather name="bookmark" size={24} color="black" />
              </Card.Actions>
            </Card>
          }</View>
        </ScrollView>
      );
    }
  ));
};
