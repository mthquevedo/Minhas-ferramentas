import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {
    return (
        <main className="flex flex-col gap-9 w-full h-100v bg-gradient-to-b from-gray-50 to-blue-700/20 bg-cover py-5 px-8 overflow-auto">
            <Header />

            <h1 className="flex justify-center items-center gap-2 text-center font-bold text-neutral-800 text-5xl sm:text-4xl py-2">
                <span className="text-[2.4rem] sm:text-[2rem]">✌</span>
                <p>Tech Tools</p>
            </h1>

            <Outlet />

            <footer className="flex justify-between text-xs text-neutral-900">
                <p>© 2024</p>
                <p>Criado por <a className="font-medium hover:underline" href="https://www.linkedin.com/in/matheus-quevedo-599315185/" target="_blank">@Matheus Quevedo</a></p>
            </footer>
        </main>
    )
}