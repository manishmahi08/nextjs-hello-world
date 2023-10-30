// lib/db.js
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://ms727254:727254@cluster0.2xroh.mongodb.net/nextdb?retryWrites=true&w=majority"; // Replace with your MongoDB URI

if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default mongoose.connection;
