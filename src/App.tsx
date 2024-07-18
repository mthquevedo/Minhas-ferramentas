import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Counter } from "./pages/Counter"
import { Home } from "./pages/Home"
import { QrCode } from "./pages/QrCode"
import { ToDoList } from "./pages/ToDoList"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="contador" element={<Counter />} />
        <Route path="gerador-de-qr-code" element={<QrCode />} />
        <Route path="lista-de-tarefas" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
