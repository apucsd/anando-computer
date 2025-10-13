import { Outlet, ScrollRestoration } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <Outlet />
            <ScrollRestoration/>

        </div>
    );
};

export default AdminLayout;
