import React from 'react';
import './CheckoutProduct.css';
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { removeFromBasket } from '../../redux/actions';

function CheckoutProduct({ id, image, title, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();
  let dispatch = useDispatch();
  const removeItemFromBasket = () => {
    // remove the item from the basket
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt="" />

      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={removeItemFromBasket}>
          <i>
            {' '}
            <AddShoppingCartIcon />
          </i>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
