import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export function Home() {

    return (
        <div className="w-100v h-100v bg-slate-500">
            <Header />

            <main>
                <Link to="contador"></Link>
            </main>
        </div>
    )
}