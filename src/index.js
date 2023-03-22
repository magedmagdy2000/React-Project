import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home'; 
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
    errorElement:<main>ERROR 404</main>
  },

  {
    path: "/html",
    element: <Html/> ,
  },

  {
    path: "/css",
    element: <Css/> ,
  },

  {
    path: "/javascript",
    element: <Javascript/> ,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
      <App/>
    </HelmetProvider>


    {/* <RouterProvider router={router} /> */}
    </BrowserRouter>

  </React.StrictMode>
  
); 


serviceWorkerRegistration.register();
