import Column from './Column'
import AddTask from './AddTask'

function Board() {
  return (
    <div className="board">
      <h1> Task Board</h1>
      <AddTask />
      <div className="columns">
        <Column title="To Do" columnId="todo" />
        <Column title="Doing" columnId="doing" />
        <Column title="Done" columnId="done" />
      </div>
    </div>
  )
}

export default Board