import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration/>

        </div>
    );
};

export default RootLayout;
