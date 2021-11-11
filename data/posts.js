export const posts = [
  {
    _id: 1,
    userId: 1,
    description: "Inserte descripción aqui",
    photos: [
      require("../assets/cat.jpg"),
      require("../assets/dog.jpg"),
      require("../assets/pug.jpg"),
      require("../assets/dogazo.jpg"),
    ],
    tag: "post",
    likes: Number((Math.random() * 10000).toFixed(0)),
    comment: 3,
  },
  {
    _id: 2,
    userId: 1,
    description: "Inserte descripción aqui",
    photos: [
      require("../assets/dog.jpg"),
      require("../assets/pug.jpg"),
      require("../assets/dogazo.jpg"),
      require("../assets/cat.jpg"),
    ],
    tag: "post",
    likes: Number((Math.random() * 10000).toFixed(0)),
    comment: 3,
  },
  {
    _id: 3,
    userId: 2,
    description: "Inserte descripción aqui",
    photos: [
      require("../assets/pug.jpg"),
      require("../assets/dogazo.jpg"),
      require("../assets/cat.jpg"),
      require("../assets/dog.jpg"),
    ],
    tag: "post",
    likes: Number((Math.random() * 10000).toFixed(0)),
    comment: 3,
  },
  {
    _id: 4,
    userId: 2,
    description: "Inserte descripción aqui",
    photos: [
      require("../assets/dogazo.jpg"),
      require("../assets/cat.jpg"),
      require("../assets/dog.jpg"),
      require("../assets/pug.jpg"),
    ],
    tag: "post",
    likes: Number((Math.random() * 10000).toFixed(0)),
    comment: 3,
  },
  {
    _id: 5,
    userId: 3,
    description: "Inserte descripción aqui",
    photos: [
      require("../assets/cat.jpg"),
      require("../assets/dog.jpg"),
      require("../assets/pug.jpg"),
      require("../assets/dogazo.jpg"),
    ],
    tag: "post",
    likes: Number((Math.random() * 10000).toFixed(0)),
    comment: 3,
  },
  {
    _id: 6,
    userId: 3,
    description: "Inserte descripción aqui",
    photos: [
      require("../assets/dog.jpg"),
      require("../assets/pug.jpg"),
      require("../assets/dogazo.jpg"),
      require("../assets/cat.jpg"),
    ],
    tag: "post",
    likes: Number((Math.random() * 10000).toFixed(0)),
    comment: 3,
  },
];
