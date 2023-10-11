import React from "react";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";

const Navigation = () => {
    const location = useLocation();
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <Navigate
                                to="/user/dashboard"
                                state={{ path: location.pathname }}
                                replace
                            />
                        }
                    />
                    <Route path="/user/dashboard" element={<Dashboard />} />
                    <Route path="/user/about" element={<About />} />
                </Routes>
            </main>
        </>
    );
};

export default Navigation;
