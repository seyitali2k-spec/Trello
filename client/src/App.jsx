import { useState, useEffect } from 'react'
import useStore from './store'
import Card from './components/Card'
import bgImage from './assets/pic.jpg'
import { DndContext } from "@dnd-kit/core"

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'doing', title: 'Doing' },
  { id: 'done', title: 'Done' },
]

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const tasks = useStore((state) => state.tasks)
  const addTask = useStore((state) => state.addTask)
  const moveTask = useStore((state) => state.moveTask)

const handleDragEnd = (event) => {
  const { active, over } = event
  if (!over) return
  moveTask(active.id, over.id)
}

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = 'no-repeat'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = newTaskTitle.trim()
    if (!title) return
    addTask(title)
    setNewTaskTitle('')
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>TaskFlow</h1>
      </header>

      <form className="add-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <DndContext onDragEnd={handleDragEnd}>
  <main className="board">
    {columns.map((column) => (
      <section key={column.id} className="column">
        <h2>{column.title}</h2>
        <div className="column-cards">
          {tasks
            .filter((task) => task.column === column.id)
            .map((task) => (
              <Card key={task.id} task={task} />
            ))}
        </div>
      </section>
    ))}
  </main>
</DndContext>
    </div>
  )
}

export default App