
import { Navigate, useLocation } from "react-router-dom";
import { Radio } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
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

    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivetRoute;