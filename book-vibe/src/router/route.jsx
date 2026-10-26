import { createBrowserRouter } from 'react-router-dom';  
import Mainlayout from '../layout/Mainlayout';          
import Home from '../components/Home';                  
import Books from '../components/Books';               
import ErrorPage from '../ErrorPage';
// import Navbar from './components/Navbar';
const router = createBrowserRouter([
  { path: "/", element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage />,
    children:[
      {
      index: true, element: <Home></Home>,
    },
  {
    path: "/books",
    element: <Books></Books>,
  }
   // Erro
  ]  

  }, 
  
]);
export default router;