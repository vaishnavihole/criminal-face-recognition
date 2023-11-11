import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import CriminalForm from './views/CriminalForm/CriminalForm';
import FaceDetection from './views/FaceDetection/FaceDetection';
import MissingPerson from './views/MissingPerson/MissingPerson';




const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/criminalForm',
    element: <CriminalForm/>
  },

  {
    path: '/missingPerson',
    element: <MissingPerson/>
  },

  {
    path: '/faceDetection',
    element: <FaceDetection/>
  },
])
root.render(<RouterProvider router={router} />);


