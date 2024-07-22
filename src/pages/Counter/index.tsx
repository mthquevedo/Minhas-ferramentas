import { useState } from "react";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";
import { CounterButton } from "../../components/CounterButton";
import { ReturnHomeButton } from "../../components/ReturnHomeButton";

export function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((count) => count + 1)
    };

    const decrement = () => {
        setCount((count) => count - 1)
    };

    return (
        <main className="flex-1">
            <ReturnHomeButton />

            <div className="h-4/5 flex justify-center items-center gap-16">

                <div className="flex flex-col gap-6 pt-4">
                    <CounterButton icon={<RiArrowUpWideFill />} className="bg-green-500 hover:bg-green-400" onClick={increment} />
                    <CounterButton icon={<RiArrowDownWideFill />} className="bg-red-500 hover:bg-red-400" onClick={decrement} />
                </div>

                <p className="font-bold text-9xl text-center">{count}</p>
            </div>
        </main>
    )
}