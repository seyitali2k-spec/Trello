import useStore from '../store'
import Card from './Card'

function Column({ title, columnId }) {
  const tasks = useStore((state) =>
    state.tasks.filter(t => t.column === columnId)
  )

  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map(task => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Column
