import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import Footer from "./components/footer/Footer";

function App() {

  const Layout = () => {

    return (
      <div className="main">
        <Navbar></Navbar>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer />
      </div>
    );

  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "/products",
          element: <Products/>
        }
      ]
    },
    {
      path: "users",
      element: <Users/>,
    },
    {
      path: "products",
      element: <Products/>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>
}

export default App
