// AddProductForm.js

import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
    console.log('addProduct Prop:', addProduct);
    const [newProduct, setNewProduct] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: { rate: 0, count: 0 }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(newProduct);
        console.log('New Product', newProduct);
        setNewProduct({
            id: '',
            title: '',
            price: '',
            description: '',
            category: '',
            image: '',
            rating: { rate: 0, count: 0 }
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={newProduct.title} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="price" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name="description" placeholder="Description" value={newProduct.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input type="text" className="form-control" id="image" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
