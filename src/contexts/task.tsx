import { createContext, ReactNode, useState } from "react";

interface Task {
    id: string;
    genre: string;
    content: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

const defaultValue: TaskContextType = {
    tasks: [],
    addTask: () => { },
};

export const TaskContext = createContext<TaskContextType>(defaultValue);

function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([
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

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    console.log(tasks)

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;