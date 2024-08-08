import TaskProvider from "../../contexts/task";
import { ToDoListContent } from "../../components/ToDoListContent";

export function ToDoList() {
    return (
        <TaskProvider>
            <ToDoListContent />
        </TaskProvider>
    )
}