import { Radio } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {

    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center pt-28">
            <Radio
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="radio-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <Navigate to='/' state={{ from: location }} replace ></Navigate>
    );
};

export default AdminRoute;