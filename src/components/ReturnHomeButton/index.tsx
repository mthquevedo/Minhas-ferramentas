import { Link } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io";

export function ReturnHomeButton() {
    return (
        <button className="font-medium text-xs bg-neutral-800 text-gray-50 py-1 px-2 rounded-lg transition-all hover:shadow-lg">
            <Link to="/" className="flex items-center gap-1">
                <IoMdArrowBack />
                Voltar
            </Link>
        </button>
    )
}