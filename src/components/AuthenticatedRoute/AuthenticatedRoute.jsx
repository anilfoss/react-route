import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../../classes/auth";
import { useSelector } from "react-redux";

const AuthenticatedRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // const { getToken, logout } = Auth();
    // const { getToken } = auth();
    const token = getToken();

    console.log("token =", token);

    const { status } = useSelector((state) => state.user);

    if (status === "error") {
        console.log("error console in authenticated route");
    }
    if (token) {
        navigate("/user/dashboard");
        return (
            <>
                {children}
                {console.log("token available!")}
            </>
        );
    }
    if (!token) {
        return (
            <>
                <Navigate
                    to="/login"
                    replace
                    state={{ path: location.pathname }}
                />
                {console.log("token not available!")}
            </>
        );
    }

    return <>{children}</>;
};

export default AuthenticatedRoute;
