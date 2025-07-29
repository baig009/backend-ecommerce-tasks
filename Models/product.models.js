import mongoose from "mongoose";

const productSchema = mongoose.Schema({
     name: {
        type: String,
         required: true,
     },
     description: {
        type: String,
        required: true,
     },
     price: {
        type: Number,
        required: true,
     },
     stock: {
        type: Number, 
        default: 0,
     },
    category: {
        type: String,
        required: true, 
     },
     featured: {
        type: Boolean, 
        default: false,
     },
     createdAt: {
        type: Date,
        default: Date.now,
     },
})

export const Product = mongoose.model('Product', productSchema);