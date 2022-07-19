import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginInitiate } from '../../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const { user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, dispatch]);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail('');
    setpassword('');
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" alt="login" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the GLOO MARKET PLACE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Link to="/register">
          <button className="login__registerButton">Create your Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
