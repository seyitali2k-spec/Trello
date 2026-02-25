import { useState } from 'react'
import useStore from '../store'

function AddTask() {
  const [input, setInput] = useState('')
  const addTask = useStore((state) => state.addTask)

  const handleAdd = () => {
    if (input.trim() === '') return
    addTask(input)
    setInput('')
  }

  return (
    <div className="add-task">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTask
