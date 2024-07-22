import { Link } from "react-router-dom"
import { TiArrowLeftThick } from "react-icons/ti";

export function ReturnHomeButton() {
    return (
        <button className="font-medium text-xs bg-neutral-800 text-gray-50 py-1 px-2 rounded-lg transition-all hover:bg-neutral-700">
            <Link to="/" className="flex items-center gap-1">
                <TiArrowLeftThick className="fill-yellow-400 text-lg" />
                Voltar
            </Link>
        </button>
    )
}