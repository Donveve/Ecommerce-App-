import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasketTotal } from '../../utils/BasketTotal';

function Subtotal() {
  const navigate = useNavigate();
  const { basket, user } = useSelector((state) => state.data);

  const handleCheckout = () => {
    if (user) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
