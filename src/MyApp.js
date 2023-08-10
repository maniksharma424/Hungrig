import { Homepage } from "./Pages/Homepage";
import { Cart } from "./Pages/Cart";
import About from "./Pages/About";
import ResturantPage from "./Pages/ResturantPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import LandingPage from "./Pages/LandingPage";
import Error from "./Pages/Error";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./Utilities/store";
import SuspenseCard from "./Pages/SuspenseCard";

const SearchPage = lazy(() => import("./Pages/SearchPage"));
const SearchResults = lazy(() => import("./Pages/SearchResults"));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

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
          <Suspense fallback={<SuspenseCard />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/searchResults",
        element: (
          <Suspense fallback={<SuspenseCard />}>
            <SearchResults />
          </Suspense>
        ),
      },
    ],
  },
]);
