import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface HomeLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to: string;
    icon: string;
    iconAltText: string;
    className: string;
}

export function HomeLink({ icon, to, className, iconAltText, ...props }: HomeLinkProps) {
    return (
        <Link to={to} className="w-28 h-28 bg-black">
            <button {...props} className={className}>
                <img src={icon} alt={iconAltText} />
            </button>
        </Link>
    );
}