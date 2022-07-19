import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useDispatch } from 'react-redux';
import { auth } from './utils/firebase';
import { setuser } from './redux/actions';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="App">
                <Register />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
