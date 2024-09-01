import { GoNumber } from "react-icons/go";
import { IoListSharp, IoQrCodeOutline } from "react-icons/io5";
import { HomeLink } from "../../components/HomeLink";

export function Home() {

    return (
        <main className="flex flex-col gap-10 flex-1 justify-center md:justify-start mb-36 md:mb-0 md:mt-4">
            <p className="text-center">Navegue pelas ferramentas abaixo:</p>
            <div className=" flex md:flex-col flex-wrap justify-center gap-48 md:gap-12 items-center">
                <HomeLink title="Contador" to="contador" icon={<GoNumber />} iconClassName="text-amber-800" className="bg-sand" />
                <HomeLink title="Lista de tarefas" to="lista-de-tarefas" icon={<IoListSharp />} iconClassName="text-orange-800" className="bg-orange-400" />
                <HomeLink title="QR Code" to="gerador-de-qr-code" icon={<IoQrCodeOutline />} iconClassName="text-slate-300" className="bg-darkblue" />
            </div>
        </main>
    )
}