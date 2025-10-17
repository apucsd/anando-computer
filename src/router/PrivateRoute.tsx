import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
      const { user } = useSelector((state: RootState) => state.auth);
      if (!user) {
            return <Navigate to="/" />;
      }
      return <>{children}</>;
};

export default PrivateRoute;