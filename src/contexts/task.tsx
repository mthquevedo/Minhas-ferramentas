import { createContext, ReactNode, useContext, useState } from "react";

export interface TaskProps {
    id: string;
    genre: string;
    content: string;
}

interface TaskContextType {
    tasks: TaskProps[];
    addTask: (task: TaskProps) => void;
    deleteTask: (task: TaskProps) => void;
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
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: "1",
            genre: "Estudo",
            content: "test"
        },
        {
            id: "2",
            genre: "Trabalho",
            content: "test2"
        }
    ]);

    const addTask = (task: TaskProps) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const deleteTask = ({ id }: TaskProps) => {
        setTasks(state => state.filter(item => item.id !== id))
    }

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