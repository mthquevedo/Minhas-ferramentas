import { GoTrash } from "react-icons/go";

interface ToDoItemProps {
    id: string;
    genre: string;
    content: string;
}

export function ToDoItem({ genre, content }: ToDoItemProps) {


    return (
        <div className="bg-zinc-500/50 w-100 px-5 py-1 rounded-lg flex gap-8 items-center my-2">
            <input type="checkbox" className="rounded-full w-6 h-6" />

            <div className="w-full p-2 text-white overflow-hidden">
                <p>{content}</p>
            </div>

            <div className="bg-orange-300 w-20 py-1 px-1 text-center font-medium text-xs text-orange-950 border border-orange-950 rounded-lg">
                {genre}
            </div>


            <button className="text-white "><GoTrash /></button>
        </div>
    )
}
// interface ToDoItemProps {
//     id: string;
//     genre: string;
//     content: string;
//     deleteAction: (id: string) => void;
// }

// export function ToDoItem({ genre, content, deleteAction, id }: ToDoItemProps) {


//     return (
//         <div className="bg-zinc-500/50 w-100 px-5 py-1 rounded-lg flex gap-8 items-center my-2">
//             <input type="checkbox" className="rounded-full w-6 h-6" />

//             <div className="w-full p-2 text-white overflow-hidden">
//                 <p>{content}</p>
//             </div>

//             <div className="bg-orange-300 w-20 py-1 px-1 text-center font-medium text-xs text-orange-950 border border-orange-950 rounded-lg">
//                 {genre}
//             </div>


//             <button className="text-white " onClick={() => deleteAction(id)}><GoTrash /></button>
//         </div>
//     )
// }