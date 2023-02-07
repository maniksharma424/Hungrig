import { Homepage } from "../Pages/Homepage";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import ResturantPage from "../Pages/ResturantPage";
import { SignUp } from "../Pages/SignUp";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import SearchPage from "../Pages/SearchPage";
import SearchResults from "../Pages/SearchResults";
import LandingPage from "../Pages/LandingPage";
import ErrorElement from "../Pages/ErrorElement";
import LocationProvider from "../Pages/LocationProvider";
const App = () => {
  return (
    <LocationProvider>
      <Header />
      <Outlet />
      <Footer />
    </LocationProvider>
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
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
