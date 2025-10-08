import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import AllServices from "../pages/services/Services";
import ContactPage from "../pages/contact/ContactPage";
import OurStory from "../pages/about/OurStory";
import OurGallary from "../pages/gallery/OurGallary";

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
            {
                path: "our-story",
                element: <OurStory/>
            },
            {
                path: "our-gallery",
                element: <OurGallary/>
            }
        ],
    },
]);

export default router;