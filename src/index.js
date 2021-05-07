import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const express = require('express');
// var app = express();

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
//     res.setHeader('Access-Control-Allow-Headers',"*");
//     res.setHeader('Access-Control-Allow-Credentials',true);
//     next();
// });



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


