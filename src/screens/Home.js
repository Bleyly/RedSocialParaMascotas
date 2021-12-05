import React from "react";
import { ScrollView } from "react-native";
import { Card } from "../components/home";
import { useDataContext } from "../../data/dataContext";
import { Cards } from "../components/Cards";

export const Home = () => {
  const { posts, users } = useDataContext();

  return (
    <ScrollView>
      <Cards
        posts={posts.map((post) => {
          const user = users.find((user) => user._id === post.userId);

          return { ...post, user };
        })}
      />
    </ScrollView>
  );
};
