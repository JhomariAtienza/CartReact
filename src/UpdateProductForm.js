import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProductForm = ({ products, updateProduct }) => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  const [updatedProduct, setUpdatedProduct] = useState(product || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productId, updatedProduct);
  };

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={updatedProduct.title} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price" name="price" placeholder="Price" value={updatedProduct.price} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name="description" placeholder="Description" value={updatedProduct.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" name="category" placeholder="Category" value={updatedProduct.category} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <input type="text" className="form-control" id="image" name="image" placeholder="Image URL" value={updatedProduct.image} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update Product</button>
                </form>
            </div>
        </div>
    </div>
);
};

export default UpdateProductForm;
