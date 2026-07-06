import {
    Routes,
    Route
} from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contacts from "../pages/Contacts";
import Prices from "@/pages/Prices.tsx";


export default function Router() {

    return (
        <Routes>

            <Route element={<Layout />}>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/contacts"
                    element={<Contacts />}
                />

                <Route
                    path="/prices"
                    element={<Prices />}
                />

            </Route>


            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}