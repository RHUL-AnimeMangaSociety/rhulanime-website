import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./styles/Header.css"

import reportWebVitals from './reportWebVitals';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* Leave this at the top */}
      <Header />

      {/* Put other components in below */}

      {/* Leave this at the bottom */}
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
