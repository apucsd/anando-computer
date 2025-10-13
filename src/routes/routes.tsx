import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import AllServices from "../pages/services/Services";
import ContactPage from "../pages/contact/ContactPage";
import OurStory from "../pages/about/OurStory";
import OurGallary from "../pages/gallery/OurGallary";
import ServiceDetailsPage from "../pages/service-details/ServiceDetailsPage";
import Login from "../pages/login/Login";
import AdminLayout from "../components/layout/AdminLayout";
import Services from "../pages/admin-panel/Services";
import Banner from "../pages/admin-panel/Banner";
import ThemeSettings from "../pages/admin-panel/Theme";
import FAQManager from "../pages/admin-panel/FAQ";
import Dashboard from "../pages/admin-panel/Dashboard";
import GalleryManager from "../pages/admin-panel/GallaryManager";

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
                path: "services/:id", 
                element: <ServiceDetailsPage /> 
            },
            {
                path: "our-story",
                element: <OurStory/>
            },
            {
                path: "our-gallery",
                element: <OurGallary/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "settings/banner",
                element: <Banner/>
            },
            {
                path: "gallery",
                element: <GalleryManager/>
            },
            {
                path: "settings/theme",
                element: <ThemeSettings/>
            },
            {
                path: "settings/faq",
                element: <FAQManager/>
            }
        ]
    }
]);

export default router;