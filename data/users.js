export const users = [
  {
    _id: 1,
    username: `@user1`,
    name: `name1 surname1`,
    email: `user1@gmail.com`,
    password: "Aa!12345",
    photo: require("../assets/avatar.jpg"),
    followers: (Math.random() * 10000).toFixed(0),
    following: (Math.random() * 10000).toFixed(0),
    description: "Something nice",
  },
  {
    _id: 2,
    username: `@user2`,
    name: `name2 surname2`,
    email: `user2@gmail.com`,
    password: "Aa!12345",
    photo: require("../assets/avatar.jpg"),
    followers: (Math.random() * 10000).toFixed(0),
    following: (Math.random() * 10000).toFixed(0),
    description: "Something nice",
  },
  {
    _id: 3,
    username: `@user3`,
    name: `name3 surname3`,
    email: `user3@gmail.com`,
    password: "Aa!12345",
    photo: require("../assets/avatar.jpg"),
    followers: (Math.random() * 10000).toFixed(0),
    following: (Math.random() * 10000).toFixed(0),
    description: "Something nice",
  },
];