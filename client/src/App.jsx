import { useState } from 'react'
import useStore from './store'
import Card from './components/Card'

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'doing', title: 'Doing' },
  { id: 'done', title: 'Done' },
]

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const tasks = useStore((state) => state.tasks)
  const addTask = useStore((state) => state.addTask)

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
    </div>
  )
}

export default App