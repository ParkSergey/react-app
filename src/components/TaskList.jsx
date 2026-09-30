import Task from './Task';
function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          created={task.created}
          completed={task.completed}
        />
      ))}
    </ul>
  );
}
export default TaskList;
