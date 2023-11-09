import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import CriminalFaceDetection from './views/CriminalFaceDetection/CriminalFaceDetection';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/criminalFaceDetection',
    element: <CriminalFaceDetection/>
  },
])
root.render(<RouterProvider router={router} />);


