import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutinitiate } from '../../redux/actions';

function Header() {
  const { user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuth = () => {
    if (user) {
      dispatch(logoutinitiate());
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img src="" className="header-logo" alt="logo" />
      </Link>
      <div className="header-option" style={{ marginRight: '-10px' }}>
        <LocationOnIcon />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select Your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={`${user ? '/' : '/login'}`} className="header-link">
          <div onClick={handleAuth} className="header-option">
            <span className="header-option1">
              Hello, {user ? user.email : 'Guest'}
              {''}
            </span>
            <span className="header-option2">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option1">returns</span>
            <span className="header-option2">& orders</span>
          </div>
        </Link>
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option1">Your</span>
            <span className="header-option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header-basket">
            <AddShoppingCartIcon />
            <span className="header-option2 basket-Count">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
