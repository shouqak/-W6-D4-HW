import { createBrowserRouter, Outlet, RouterProvider } from "react-router"

import Cards from "../Component/Cards"
import Home from "../Pages/Home"
import Cats from "../Pages/Cats"
import Dogs from "../Pages/Dogs"
import Rabbit from "../Pages/Rabbit"
import Hamster from "../Pages/Hamster"
import Parrot from "../Pages/Parrot"
import Navbar from "../Component/Navbar"
import AboutUs from "../Pages/AboutUs"

function Layout() {
  return (
    <>
    <Navbar/>
      <Outlet />
      <Cards />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cats", element: <Cats /> },
      { path: "/dogs", element: <Dogs /> },
      { path: "/rabbit", element: <Rabbit /> },
      { path: "/hamster", element: <Hamster/> },
            { path: "/parrot", element: <Parrot/> },
            { path: "/aboutus", element: <AboutUs/> },

    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
