import { prisma } from "./lib/prisma";

async function run() {
  // const createUser = await prisma.user.create({
  //     data: {
  //         name: "jose",
  //         email: "jose@prisma",
  //     }
  // })

  // console.log(createUser)

  // create post for user id 1
  // const  createPost = await prisma.post.create({
  //     data: {
  //         title: "My first post",
  //         content: "This is my first post",
  //         authorId: 1,
  //         // author: {
  //         //     connect: {
  //         //         id: 1
  //         //     }
  //         // }
  //     }
  // })

  // console.log(createPost);

  // created profile

  // const createdProfile = await prisma.profile.create({
  //   data: {
  //     bio: "I like turtles",
  //     userId: 1,
  //   },
  // });

  // console.log(createdProfile);

  // retrive all users

  const users = await prisma.user.findMany({
    // include: {
    //   posts: true,
    //   profile: true,
    // },
    select:{
      posts: true,
      profile: true
    }
  });

  console.dir(users, { depth: Infinity });
  // console.log(users);
}

run();
