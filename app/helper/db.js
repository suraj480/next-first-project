import mongoose from "mongoose";
import { User } from "../models/users";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "nextjs_first_db_connectivity",
    });
    const uuser=new User({
      name:"test name",
      email:"suraj@gmail.com",
      password:"123",
      about :"this is testing "
  })
  await uuser.save()
  
    console.log("db connected...");
    console.log(connection);
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
