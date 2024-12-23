import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ma from './Ma.jsx';
import Home from './Component/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Ma></Ma>,
    children: [
      {
        path: '/',
        element: <Home></Home>,  
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
