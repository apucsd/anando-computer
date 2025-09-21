import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../components/sections/About";
import Home from "../pages/home/Home";
import Contact from "../components/sections/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { 
                index: true, 
                element: <Home /> 
            },
            { 
                path: "about", 
                element: <About /> 
            },
            { 
                path: "contact", 
                element: <Contact /> 
            },
        ],
    },
]);

export default router;