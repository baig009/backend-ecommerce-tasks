import mongoose from "mongoose";
import { Product } from "../Models/product.models.js";
import { DB } from "./index.js";

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', image: 'laptop.jpg', description: 'A high-end laptop.', stock: 50, featured: true },
  { id: 2, name: 'Smartphone', price: 499.99, category: 'Electronics', image: 'smartphone.jpg', description: 'A latest smartphone.', stock: 100, featured: true },
  { id: 3, name: 'Headphones', price: 199.99, category: 'Accessories', image: 'headphones.jpg', description: 'Noise-cancelling headphones.', stock: 200, featured: false }
];

Product.insertMany(products)  .then(() => {
    console.log('Products seeded successfully')})
  .catch(err => {
    console.error('Error seeding products:', err);
    process.exit();
  });
