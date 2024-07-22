import { ReturnHomeButton } from "../../components/ReturnHomeButton";

export function ToDoList() {
    return (
        <main className="flex-1">
            <ReturnHomeButton />

            <div className="h-4/5 flex justify-between items-start pt-10 mx-3">
                <form action="" className="flex flex-col gap-5">
                    <select name="" id="">
                        <option value="">Selecione a categoria</option>
                        <option value="Estudo">Estudo</option>
                        <option value="Estudo">Trabalho</option>
                        <option value="Estudo">Pessoal</option>
                    </select>

                    <input type="text" placeholder="Descreva a tarefa" />
                    <button type="submit">Criar</button>
                </form>

                <div>teste</div>
            </div>
        </main>
    )
}