import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UnderDevelopment from './Pages/HomePage/UnderDevelopment';
import About from './Pages/About/About';
function App() {
 
  const router = createBrowserRouter([

    
    {
      path: "/",
      element: <HomePage />,
      errorElement: <>404 page not found</>,
    },
    {
      path: "/About",
      element: <About />,
    },
 
  ]);
  return <RouterProvider router={router} />;
}

export default App
