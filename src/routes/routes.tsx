import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../components/sections/About";
import Home from "../pages/home/Home";
import Contact from "../components/sections/Contact";
import FAQ from "../pages/faq/FAQ";
import AllServices from "../pages/services/Services";

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
            { 
                path: "faq", 
                element: <FAQ /> 
            },
            { 
                path: "services", 
                element: <AllServices /> 
            },
        ],
    },
]);

export default router;