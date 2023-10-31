import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./styles/Header.css"

import reportWebVitals from './reportWebVitals';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* Leave this at the top */}
      <Header />

      {/* Put other components in below */}

      {/* Specifies the datasource and link to the complete calendar */}
      <Events
          dataSource={`https://docs.google.com/spreadsheets/d/e/2PACX-1vRAHUQzFuZ1O0J7soL5Wud5CEbA3MLv4T4Pqms_KhAueNoFX6h2T0DTGwgaLu92FYWdnFV50Q0F1AHY/pub?gid=0&single=true&output=csv`}
          calendar={`https://calendar.google.com/calendar/embed?src=c_8219055ac4671ef4f7faec2be6f2db0d38d1e3b23c3b4e94d81b71fdc3c6a0e4%40group.calendar.google.com&ctz=Europe%2FLondon`}
      />


      {/* Leave this at the bottom */}
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
