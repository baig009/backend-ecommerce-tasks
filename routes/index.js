import { Router } from 'express';
const router = Router();
import { Product } from '../Models/product.models.js';

// Home route
router.get('/', async (req, res) => {
    const productsfeatured =  await Product.find({featured: true});
    res.render('home', {
        products: productsfeatured

    });
}); 

// product route 
router.get('/product', (req, res) => {
    res.render('product', {
        title: 'Products',
        pageDescription: 'Browse our products'
    });
});

// product-details route 
router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.render('product-details', {
        title: 'Product Details',
        pageDescription: 'View product details',
        productId: productId
    });
});

// Export the router
export default router;