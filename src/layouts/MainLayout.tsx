import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {

    return (
        <div className="flex flex-col gap-9 w-100v h-100v bg-gradient-to-b from-gray-50 to-blue-700/20 py-5 px-8 overflow-auto">
            <Header />

            <h1 className="text-center font-bold text-neutral-800 text-5xl py-2">✌ Tech Tools</h1>

            <Outlet />

            <footer className="flex justify-between text-xs text-neutral-900">
                <p>© 2024</p>
                <p>Desenvolvido por <a className="font-medium hover:underline" href="https://www.linkedin.com/in/matheus-quevedo-599315185/" target="_blank">@Matheus Quevedo</a></p>
            </footer>
        </div>
    )
}