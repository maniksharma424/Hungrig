import { Homepage } from "../Pages/Homepage";
import { Cart } from "../Pages/Cart";
import About from "../Pages/About";
import ResturantPage from "../Pages/ResturantPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import SearchPage from "../Pages/SearchPage";
import SearchResults from "../Pages/SearchResults";
import LandingPage from "../Pages/LandingPage";
import ErrorElement from "../Pages/ErrorElement";
import { createContext, useEffect, useState } from "react";


export const locationContext = createContext();
export const getLocation = (setState) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {setState(pos.coords)
    return pos.coords},
    (err) => { throw new Error('allow location to see rest near u')}
  );
};
const App = () => {
  const [location, setLocation] = useState({});
  
  useEffect(() => {
    getLocation(setLocation);
  }, []);
  return (
    <locationContext.Provider value={location}>
      <Header />
      <Outlet />
      <Footer />
    </locationContext.Provider>
  );
};
export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },

      {
        path: "/homePage",
        element: <Homepage />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },

      {
        path: "/restaurant-page",
        element: <ResturantPage />,
      },
      {
        path: "/searchpage",
        element: <SearchPage />,
      },
      { path: "/searchResults", element: <SearchResults /> },
    ],
  },
]);
