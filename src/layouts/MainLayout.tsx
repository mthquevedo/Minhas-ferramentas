import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {

    return (
        <div className=" flex flex-col w-100v h-100v bg-gradient-to-b from-gray-50 to-blue-700/20 py-5 px-8">
            <Header />

            <Outlet />

            <footer className="flex justify-between text-xs text-neutral-900 pt-3">
                <p>© 2024</p>
                <p>Desenvolvido por <a className="font-medium" href="http://" target="_blank">@Matheus Quevedo</a></p>
            </footer>
        </div>
    )
}