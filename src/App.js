import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])
  const [showAddTask, setShowAddTask] = useState(false)
  // Delete Task
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task , reminder: !task.reminder}: task))
    console.log(tasks);
  }
  // Const Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 198 + 94)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const name = 'Task Tracker';
  return (
    <div className="container">
      <Header title={name} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks 😂'}
    </div>
  );
}

export default App;
