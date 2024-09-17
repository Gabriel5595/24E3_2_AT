import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import Home from "./pages/Home";
import Not_Found from './pages/Not-found';
import Details from './pages/Details';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Not_Found />,
    },
    {
        path: "/details/:id",
        element: <Details />
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
