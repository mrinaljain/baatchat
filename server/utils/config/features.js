import mongoose from "mongoose";
let connectDb = async function () {
  let mongoUri = process.env.MONGO_URI;
  await mongoose
    .connect(mongoUri)
    .then((data) => {
      console.log(`Connected successfully to Database ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
};

const emmitEvent = (req, event, users, data) => {
  console.log("Event sent", event);
};

export { connectDb, emmitEvent };
