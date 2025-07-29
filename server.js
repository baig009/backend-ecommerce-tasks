import express from 'express';
import routes from './routes/index.js';
import {DB} from './DB/index.js';
import {Product} from './Models/product.models.js';

const app = express();
  // Set the view engine
app.set('view engine', 'ejs'); // Or 'pug', 'hbs', etc.
    // Set the views directory
app.set('views', './views'); 


// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware for static files
app.use(express.static('public'));

app.post('/api/products', async (req, res) => {
   try {
            const { name, description, price, category } = req.body;

            const newProduct = new Product({
                name,
                description,
                price,
                category,
            });

            const product = await newProduct.save();
            res.status(201).json(product); // 201 Created
        }
     catch (error) {
        res.status(400).json({ message: error.message }); 
    }
});

// Use routes
app.use('/', routes );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });