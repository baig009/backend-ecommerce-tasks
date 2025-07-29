import mongoose from "mongoose";



// momgoose for MongoDB connection
const connectionDb = mongoose.connect('mongodb://localhost:27017/productDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


export const DB = connectionDb;