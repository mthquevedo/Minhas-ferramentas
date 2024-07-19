import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {

    return (
        <div className="w-100v h-100v bg-gradient-to-b from-gray-50 to-blue-700/30 py-5 px-8">
            <Header />

            <Outlet />

        </div>
    )
}