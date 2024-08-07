import { createContext, ReactNode } from "react";

interface Task {
    id: number;
    genre: string;
    content: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask?: (task: Task) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext<TaskContextType>({})

function TaskProvider({ children }: TaskProviderProps) {
    return (
        <TaskContext.Provider>
        { children }
        </TaskContext.Provider>
    )
}