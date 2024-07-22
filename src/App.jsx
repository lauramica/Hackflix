import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Searcher from "./pages/Searcher";
import RedirectToPelicula from "./pages/RedirectToPelicula";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pelicula/:id",
      element: <Movie />,
    },
    {
      path: "/buscador",
      element: <Searcher />,
    },
    {
      path: "/sobrenosotros",
      element: <AboutUs />,
    },
    {
      path: "/contacto",
      element: <Contact />,
    },
    {
      path: "/movie/:id",
      element: <RedirectToPelicula />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
