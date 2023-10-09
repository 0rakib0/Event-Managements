import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EventDetails from "../Pages/Event-Details/EventDetails";
import PrivetRout from "./PrivetRout/PrivetRout";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/details/:eventId',
          element:<PrivetRout><EventDetails></EventDetails></PrivetRout>,
          loader: () => fetch('../../Events.json')
        }
      ]
    },
  ]);


export default router