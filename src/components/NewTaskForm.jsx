function NewTaskForm({ onAddTask }) {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onChange={(event) => onAddTask(event.target.value)}
    />
  );
}

export default NewTaskForm;
