import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface HomeLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to: string;
    icon: React.ReactNode;
    className: string;
    iconClassName?: string;
    title: string;
}

export function HomeLink({ icon, to, className, iconClassName, title, ...props }: HomeLinkProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="font-medium">{title}</p>

            <Link to={to}>
                <button {...props} className={twMerge(" flex justify-center items-center w-24 h-24 rounded-lg shadow-lg transition-all duration-100	 hover:-translate-y-1", className)}>
                    <p className={twMerge("text-4xl", iconClassName)}>{icon}</p>
                </button>
            </Link>
        </div>
    );
}