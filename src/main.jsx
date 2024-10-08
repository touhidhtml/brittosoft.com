import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import PrivacyPolicy from './Pages/PrivacyPolyicy';
import MainLaout from './Components/Layout/MainLaout';
import TermsAndConditions from './Pages/TermsAndConditions';

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
      {
        path: "/about",
        element:  <About/>,
      },
      {
        path: "/contact",
        element:  <Contact/>,
      },
      {
        path: "/pricing",
        element:  <Pricing/>,
      },
      {
        path: "/pryvacy-policy",
        element:  <PrivacyPolicy/>,
      },
      {
        path: "/terms-and-conditions",
        element:  <TermsAndConditions/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
