import React, { useState, useEffect } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerInitiate } from '../../redux/actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.data);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, dispatch]);

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register">
      <Link to="/">
        <img className="register__logo" alt="register" />
      </Link>

      <div className="register__container">
        <h2>Create Your Account</h2>

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
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={register} className="continue">
            Continue
          </button>
        </form>

        <div className="detail">
          <p>Already have an account?</p>

          <Link to="/login" className="signin-link">
            <p>Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
