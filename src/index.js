import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './scss/custom.scss'
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css';
import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";



const router = createHashRouter ([
    {
      path: "/*",
      element: <App />,
    }
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.querySelector('#root'));
