import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="w-100v h-100v bg-slate-800">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}