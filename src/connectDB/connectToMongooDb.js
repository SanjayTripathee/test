// import mongoose from "mongoose";

// const connectToMongoDb = () => {
//   mongoose.connect(
//     "mongodb+srv://sanjay:sanjay@codersanjay.jknb2.mongodb.net/dw18project"
//   );
//   // mongoose.connect("mongodb://0.0.0.0:27017/self");
//   console.log("application is connected to MongoDB successfully");
// };

// export default connectToMongoDb;



import mongoose from "mongoose";

let isConnected = false;

const connectToMongoDb = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect("mongodb+srv://sanjay:sanjay@codersanjay.jknb2.mongodb.net/dw18project");

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export default connectToMongoDb;
