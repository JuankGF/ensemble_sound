import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/utils/ErrorPage";
import App from "./App";
import Home from "./components/home/Home";
import BookEvent from "./components/book/BookEvent";
import BookSucces from "./components/book/BookSucces";
import Services from "./components/shop-online/Services";
import Cart from "./components/shop-online/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services",
        element: <Cart />,
      },
      {
        path: "/book_online",
        element: <BookEvent />,
      },
      { path: "/book_online/book_success", element: <BookSucces /> },
      {
        path: "/login",
        element: <h1>ToDo</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
