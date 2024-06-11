import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/Notfound/NotFound";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";


const myRouter = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <ProtectedRoutes><Home /></ProtectedRoutes> },
      { path: "/home", element: <ProtectedRoutes><Home /></ProtectedRoutes> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> }
    ]
  }])

function App() {
  return (<>
    <RouterProvider router={myRouter} />
  </>);
}

export default App;
