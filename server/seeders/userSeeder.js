import { faker } from "@faker-js/faker";
import User from "../models/User.js";

const generateUsers = (count) => {
  // define an empty array
  // run a for loop
  //  keep creating user with randon details inevery iteration

  // resolve all promises together
  try {
    const userPromises = [];

    for (let i = 1; i <= count; i++) {
      let user = User.create({
        name: faker.internet.displayName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        bio: "Gokuldham Member",
        avatar: {
          public_id: faker.string.uuid(),
          url: faker.image.avatar(),
        },
        email: faker.internet.email(),
      });

      userPromises.push(user);
    }
    Promise.all(userPromises);
    console.log("Gokuldham Society created..");
    process.exit(1);
  } catch (error) {
    console.log(error.message);
  }
};

export default generateUsers;
