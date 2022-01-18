import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const navBar = (
//   <nav>
//     <h1>Here is a navbar</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

ReactDOM.render(
  <App />
  
  
  ,document.getElementById('root')
);

// OLD WAY OF USING VANILLA JS TO ADD HTML VIA JS
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = 'h1test';
// document.querySelector('#root').append(navBar);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
