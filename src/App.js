import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestNavigation from "./GuestNavigation";
import Navigation from "./Navigation";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
    const token = localStorage.getItem("token");
    return (
        <>
            <Provider store={store} log={console.log("store = ", store)}>
                <BrowserRouter basename="/">
                    <Routes>
                        {token ? (
                            <Route
                                exact
                                path="/*"
                                element={
                                    <ProtectedRoute>
                                        <Navigation />
                                    </ProtectedRoute>
                                }
                            />
                        ) : (
                            <Route
                                exact
                                path="/*"
                                element={<GuestNavigation />}
                            />
                        )}
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
