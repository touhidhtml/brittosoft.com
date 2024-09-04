import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Service from './Pages/Service';
import MainLaout from './Components/Layout/MainLaout';

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLaout/>,
    children: [
      {
        path: "/",
        element:  <App/>,
      },
      {
        path: "/service",
        element:  <Service/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
