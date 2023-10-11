import React from "react";
import GuestHeader from "./components/Header/GuestHeader";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const GuestNavigation = () => {
    const location = useLocation();
    console.log("welcome to guest nav!");
    return (
        <>
            <GuestHeader />

            <main>
                <Routes>
                    <Route
                        exact
                        path="/*"
                        element={
                            <Navigate
                                to="/login"
                                state={{ path: location.pathname }}
                                replace
                            />
                        }
                    />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
            </main>
        </>
    );
};

export default GuestNavigation;
