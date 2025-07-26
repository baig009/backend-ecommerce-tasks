import { Router } from 'express';
const router = Router();

// Home route
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        pageDescription: 'Welcome to our e-commerce store'
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