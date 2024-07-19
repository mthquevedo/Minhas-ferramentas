import { DateTimeFormatOptions } from 'intl';
import { useEffect, useState } from 'react';

export function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date());
        }, 1000)
    }, []);

    const options: DateTimeFormatOptions = { day: "numeric", month: "long" };
    const formattedDate = currentDate.toLocaleDateString("pt-BR", options);
    const hour: number = currentDate.getHours();
    const minutes: number = currentDate.getMinutes();

    function greeting(hour: number) {
        if (hour > 4 && hour < 12) {
            return "Bom dia";
        } else if (hour >= 12 && hour < 18) {
            return "Boa tarde";
        } else {
            return "Boa noite";
        }
    }

    const currentGreeting = greeting(hour);

    return (
        <header className="flex justify-between text-sm text-neutral-800 pb-3">
            <p><span className="font-medium">{currentGreeting}</span>, {formattedDate}</p>
            <p className="border border-neutral-600 rounded-sm py-1 px-2 text-center">
                {hour}
                <span className="animate-blink font-medium">:</span>
                {minutes < 10 ? `0${minutes}` : minutes}
            </p>
        </header>
    );
}