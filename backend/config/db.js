const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://mongo:xRYVcNgrrwFJofSgeUyVNhIiMUEJimVO@gondola.proxy.rlwy.net:20876')
    // process.env.MONGO_URI
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB 
