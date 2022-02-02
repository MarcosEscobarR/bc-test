import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PrivateRoute} from "./pages/shared/PrivateRoute";
import Welcome from "./pages/welcome/Welcome";



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route path="/welcome" element={<PrivateRoute component={Welcome}/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
