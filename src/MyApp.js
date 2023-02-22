import { Homepage } from "./Pages/Homepage";
import { Cart } from "./Pages/Cart";
import About from "./Pages/About";
import ResturantPage from "./Pages/ResturantPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import LandingPage from "./Pages/LandingPage";
import Error from "./Pages/Error";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./Utilities/store";

export const locationContext = createContext();
export const getLocation = (setState) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setState(pos.coords);
      return pos.coords;
    },
    (err) => {
      throw new Error("allow location to see rest near u");
    }
  );
};

const SearchPage = lazy(() => import("./Pages/SearchPage"));
const SearchResults = lazy(() => import("./Pages/SearchResults"));

const App = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocation(setLocation);
  }, []);
  return (
    <Provider store={store}>
    <locationContext.Provider value={location}>
      <Header />
      <Outlet />
      <Footer />
    </locationContext.Provider>
    </Provider>
  );
};

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,

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
        element: (
          <Suspense>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/searchResults",
        element: (
          <Suspense>
            <SearchResults />
          </Suspense>
        ),
      },
    ],
  },
]);
