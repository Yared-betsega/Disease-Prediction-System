import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import Container from './components/container/Container';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/login' element={<Container Component={Login}/>}></Route>
        <Route path='/signup' element={<Container Component={Signup}/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>

);
