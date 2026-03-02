import useStore from '../store'
import Card from './Card'
import { useDroppable } from "@dnd-kit/core"

function Column({ title, columnId }) {
  const tasks = useStore((state) =>
    state.tasks.filter(t => t.column === columnId)
  )

  const { setNodeRef } = useDroppable({
    id: columnId,
  })

  return (
    <div ref={setNodeRef} className="column">
      <h2>{title}</h2>
      {tasks.map(task => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Column
