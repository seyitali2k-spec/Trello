import useStore from '../store'

function Card({ task }) {
  const moveTask = useStore((state) => state.moveTask)

  return (
    <div className="card">
      <p>{task.title}</p>
      <div className="card-buttons">
        {task.column !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>To Do</button>
        )}
        {task.column !== "doing" && (
          <button onClick={() => moveTask(task.id, "doing")}>Doing</button>
        )}
        {task.column !== "done" && (
          <button onClick={() => moveTask(task.id, "done")}>Done</button>
        )}
      </div>
    </div>
  )
}

export default Card