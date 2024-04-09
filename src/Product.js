import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="card h-100">
      <img src={product.image} alt={product.title} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <div className={isCollapsed ? 'collapse' : ''}>
          <p className="card-text">{product.description}</p>
        </div>
        {product.description.length > 50 && (
          <button
            className="btn btn-link p-0 mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseDescription${product.id}`}
            aria-expanded={!isCollapsed ? 'true' : 'false'}
            aria-controls={`collapseDescription${product.id}`}
            onClick={toggleCollapse}
          >
            {isCollapsed ? 'Show More' : 'Show Less'}
          </button>
        )}
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <div className="mt-auto">
          <button onClick={() => addToCart(product)} className="btn btn-primary btn-sm mr-2">Add to Cart</button>
          <Link to={`/update-product/${product.id}`} className="btn btn-secondary btn-sm">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
