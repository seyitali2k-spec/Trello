import useStore from '../store'
import { useDraggable } from "@dnd-kit/core"

function Card({ task }) {
  const moveTask = useStore((state) => state.moveTask)
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  })

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: "grab",
  }

  return (
    <div ref={setNodeRef} style={style} className="card">
      <p {...listeners} {...attributes} style={{ cursor: "grab" }}>
        {task.title}
      </p>
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
