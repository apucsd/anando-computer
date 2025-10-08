import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../components/sections/About";
import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import AllServices from "../pages/services/Services";
import ContactPage from "../pages/contact/ContactPage";

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
                element: <ContactPage /> 
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