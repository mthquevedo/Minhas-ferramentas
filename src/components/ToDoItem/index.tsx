import { GoTrash } from "react-icons/go";
import { useToDo } from "../../contexts/task";
import { TaskProps } from "../../contexts/task";
import { twMerge } from "tailwind-merge";

export function ToDoItem({ id, genre, content }: TaskProps) {
    const { deleteTask } = useToDo()

    const genreColor = (genre: string) => {
        if (genre === "Estudo") {
            return "bg-orange-300";
        } else if (genre === "Trabalho") {
            return "bg-gray-300";
        } else {
            return "bg-lime-300";
        }
    }

    const handleDeleteTask = (taskId: string) => {
        deleteTask(taskId);
    }

    return (
        <div className="bg-zinc-500/50 w-100 px-5 py-1 rounded-lg flex gap-8 items-center my-2">
            <input type="checkbox" className="rounded-full w-6 h-6" />

            <div className="w-full p-2 text-white overflow-hidden">
                <p>{content}</p>
            </div>

            <div className={twMerge("bg-orange-300 w-20 py-1 px-1 text-center font-medium text-xs text-orange-950 border border-orange-950 rounded-lg", genreColor(genre))}>
                {genre}
            </div>

            <button className="text-white" onClick={() => handleDeleteTask(id)}><GoTrash /></button>
        </div>
    )
}