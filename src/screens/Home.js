import React from "react";
import { ScrollView } from "react-native";
import { Card } from "../components/home";
import { useDataContext } from "../../data/dataContext";

export const Home = () => {
  const { posts, users } = useDataContext();

  return (
    <ScrollView>
      {posts.map((post) => {
        const user = users.find((user) => user._id === post.userId);
        return (
          <Card
            key={post._id}
            style={{ marginTop: 8 }}
            avatar={user.photo}
            name={user.name}
            description={post.description}
            photos={post.photos}
            likes={post.likes}
            comments={post.comment}
          />
        );
      })}
    </ScrollView>
  );
};
