import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product({ id, title, image, price, rating, specification, details }) {
  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>
        <i>
          <AddShoppingCartIcon />
          Add to Basket
        </i>
      </button>
    </div>
  );
}

export default Product;
