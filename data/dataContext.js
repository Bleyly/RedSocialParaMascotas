import React, { createContext, useContext, useState } from "react";
import { posts as dataPosts } from "./posts";
import { users as dataUsers } from "./users";

const dataContext = createContext();

export const useDataContext = () => useContext(dataContext);

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(dataUsers);
  const [posts, setPosts] = useState(dataPosts);

  const value = {
    addUser: (user) => setUsers((users) => [...users, user]),
    addPost: (post) => setPosts((posts) => [post, ...posts]),
    removeUser: () =>
      setUsers((users) => {
        const newUsers = [...users];
        newUsers.pop();
        return newUsers;
      }),
    users,
    posts,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};
