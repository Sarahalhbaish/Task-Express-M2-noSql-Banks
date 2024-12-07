const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://sarah21995:5Zk1zmwm4k6o3Vuw@cluster0.p6rtt.mongodb.net/');
    console.log(`mongo connected: ${conn.connection.host}`);
  };

  module.exports = connectDB;