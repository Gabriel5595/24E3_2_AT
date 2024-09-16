import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import Home from "./pages/Home"
import Not_Found from './pages/not-found';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Not_Found />,
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
