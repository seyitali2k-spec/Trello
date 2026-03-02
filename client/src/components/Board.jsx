import Column from './Column'
import { DndContext } from "@dnd-kit/core"
import useStore from '../store'

function Board() {
  const moveTask = useStore((state) => state.moveTask)
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    moveTask(active.id, over.id)
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board">
        <div className="columns">
          <Column title="To Do" columnId="todo" />
          <Column title="Doing" columnId="doing" />
          <Column title="Done" columnId="done" />
        </div>
      </div>
    </DndContext>
  )
}
export default Board
