import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`);
    console.log(`Connected to DB: ${mongoose.connection.db.databaseName}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
