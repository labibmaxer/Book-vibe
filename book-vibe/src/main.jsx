import React, { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Mainlayout from './layout/Mainlayout';
import Home from './components/Home';
import Books from './components/Books';
import Navbar from './components/Navbar';
import  router  from './router/route';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);