import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import First from "./pages/First.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./components/Signup.jsx";
import Chartpage from "./components/Chartpage.jsx";
import Auth from './pages/Auth.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
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
          path: "/about",
          element: <About />,
        },
        {
          path: "chart",
          element: <Chartpage />,
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
