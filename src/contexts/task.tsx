import { createContext, ReactNode, useContext, useState } from "react";
import { taskGenreValues } from "../components/ToDoItem/constants";

export interface TaskProps {
    id: string;
    genre: taskGenreValues;
    content: string;
}

interface TaskContextType {
    tasks: TaskProps[];
    addTask: (task: TaskProps) => void;
    deleteTask: (id: string) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

const defaultValue: TaskContextType = {
    tasks: [],
    addTask: () => { },
    deleteTask: () => { },
};

export const TaskContext = createContext<TaskContextType>(defaultValue);

function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<TaskProps[]>(() => {
        const storageTasks = localStorage.getItem("tasks");
        return storageTasks ? JSON.parse(storageTasks) : [];
    });

    const addTask = (task: TaskProps) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks, task];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks))
            return updatedTasks;
        });
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter(item => item.id !== id);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks
        });
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useToDo() {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error("O useToDo precisa ser usado dentro de um TaskProvider")
    }

    return context;
}

export default TaskProvider;