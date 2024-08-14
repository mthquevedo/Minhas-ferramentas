import { IoListSharp } from "react-icons/io5";
import { TaskProps, useToDo } from "../../contexts/task";
import { ReturnHomeButton } from "../ReturnHomeButton";
import { ToDoItem } from "../ToDoItem";

export function ToDoListContent() {
    const { tasks, addTask } = useToDo();

    const handleCreateTask = (event: React.FormEvent) => {
        event.preventDefault();

        const taskId = "mq" + Math.random().toString(16).slice(2, 10);
        const formInputGenre = (document.getElementById('genderOptions') as HTMLSelectElement).value;
        const formTaskInput = (document.getElementById('taskContent') as HTMLInputElement).value.trim();

        if (!formTaskInput) {
            alert("O conteúdo da tarefa não pode estar vazio!");
            return
        }

        const formInputContent = formTaskInput;

        AddTask({ id: taskId, genre: formInputGenre, content: formInputContent });
    }

    const AddTask = ({ id, genre, content }: TaskProps) => {
        addTask({ id: id, genre: genre, content: content });
        clearInputs()
    };

    console.log(tasks);

    const clearInputs = () => {
        (document.getElementById('genderOptions') as HTMLSelectElement).selectedIndex = 0;
        (document.getElementById('taskContent') as HTMLInputElement).value = '';
    }

    return (
        <div className="flex-1">
            <ReturnHomeButton />

            <main className="h-5/6 bg-gray-400 flex justify-between items-start mt-7 shadow-lg rounded-lg mx-16">

                <aside className="w-30v h-full bg-gradient-to-t from-neutral-800 to-neutral-800/70 px-8 py-7 rounded-l-lg overflow-hidden">
                    <form
                        className="flex flex-col justify-center gap-5"
                        onSubmit={handleCreateTask}
                    >

                        <div className="flex items-center gap-4 pb-4">
                            <span className="bg-orange-400 p-2 rounded-full"><IoListSharp /></span>
                            <h2 className="text-gray-50 font-bold text-lg">Crie uma nova tarefa:</h2>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-50 text-sm pb-2">Selecione a categoria:</label>
                            <select
                                name="genderOptions"
                                id="genderOptions"
                                className="rounded-lg p-1 cursor-pointer bg-neutral-500 border border-gray-400 text-gray-50">
                                <option value="Estudo">Estudo</option>
                                <option value="Trabalho">Trabalho</option>
                                <option value="Pessoal">Pessoal</option>
                            </select>
                        </div>

                        <div className="flex flex-col text-gray-50">
                            <label className="text-gray-50 text-sm pb-2">Conteúdo:</label>
                            <input
                                type="text"
                                id="taskContent"
                                placeholder="Descreva a tarefa"
                                className="rounded-lg p-1 pl-2 bg-neutral-500 border border-gray-400 text-gray-50 placeholder:text-gray-50 focus:outline-none" />
                        </div>

                        <div className="self-end pt-3">
                            <button
                                type="submit"
                                className="bg-orange-400 text-orange-950 rounded-lg p-1 mt-2 font-medium w-28 border-2">
                                Adicionar
                            </button>
                        </div>
                    </form>
                </aside>

                <div className="w-80v h-full px-8 py-7 overflow-y-auto">
                    <p className="font-medium">Tarefas:</p>
                    {tasks.map(task => {
                        return (
                            <ToDoItem key={task.id} id={task.id} genre={task.genre} content={task.content} />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}