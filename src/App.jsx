import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import First from "./pages/First.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./components/Signup.jsx";
import Chartpage from "./components/Chartpage.jsx";
import Auth from './pages/Auth.jsx';
import RegisterWorker from './pages/Register.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <First />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        
        {
          path: "/register",
          element: <RegisterWorker />,
        },
        {
          path: "/chart",
          element: <Chartpage />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
