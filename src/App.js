import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc Appt',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meet Friend',
      day: 'Feb 6th',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shop',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Add Task
  const addTask = (task) => {
    console.log(task);
  }
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}
// 47:00
// class App extends React.Component{ diff way to if only want to use classes)
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }
export default App;
