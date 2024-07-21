import { useState } from "react"
import { ReturnHomeButton } from "../../components/ReturnHomeButton"

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <main className="flex-1">

            <ReturnHomeButton />

            <div className="h-4/5 flex flex-wrap justify-center  items-center">

                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </main>
    )
}