import express from 'express';
import routes from './routes/index.js';
import mongoose from 'mongoose';


const app = express();
  // Set the view engine
app.set('view engine', 'ejs'); // Or 'pug', 'hbs', etc.
    // Set the views directory
app.set('views', './views'); 


// momgoose for MongoDB connection
// mongoose.connect('mongodb://localhost:27017/productDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));



   // Use routes
app.use('/', routes );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });