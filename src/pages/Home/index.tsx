import { Link } from "react-router-dom";

export function Home() {

    return (
        <div className="flex-1">
            <main>
                <Link to="contador"></Link>
            </main>
        </div>
    )
}