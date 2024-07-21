import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CounterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    className: string;
}

export function CounterButton({ icon, className, ...props }: CounterButtonProps) {
    return (
        <button {...props} className={twMerge("group flex justify-center items-center w-28 h-10 rounded-md shadow-sm", className)}>
            <span className="text-3xl text-white group-hover:text-4xl">{icon}</span>
        </button>
    );
}