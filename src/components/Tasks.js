import Task from './Task'
const Tasks = ({tasks, onDelete,onToggle}) => {

  return (
    //setTasks(...tasks,) to change tasks use setTasks ... to get rest and then new object 
  <>
    {tasks.map((task) => (
      <Task key = {task.id} task = {task} 
        onDelete={onDelete} onToggle = {onToggle}
      />
      ))}
  </>
  )
};

export default Tasks;
