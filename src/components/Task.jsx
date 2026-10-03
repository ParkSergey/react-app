import { format } from 'date-fns';
function Task({
  description = 'Task',
  created = new Date(),
  completed = false,
}) {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          readOnly
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{format(created, 'PPpp')}</span>
        </label>
        <button className="icon icon-edit" aria-label="Edit task"></button>
        <button className="icon icon-destroy" aria-label="Delete task"></button>
      </div>
      <input type="text" className="edit"/>
    </li>
  );
}

export default Task;
