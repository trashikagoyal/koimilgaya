const mongoose = require("mongoose");

const connectDb = async () => {
  const connection = await mongoose.connect("mongodb+srv://tanishaagarwal1121:test@cluster0.yhwy6n1.mongodb.net/hackathon-koi?retryWrites=true&w=majority&appName=Cluster0");
  if (connection.STATES.connected) console.log("Connected to the database");
  if (connection.STATES.disconnected)
    console.log("Error connecting to the database");
  return;
};

module.exports = { connectDb };
