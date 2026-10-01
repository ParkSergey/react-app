import './App.css';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
const tasks = [
  {
    id: 1,
    description: 'Completed task',
    created: new Date(),
    completed: true,
  },
  {
    id: 2,
    description: 'Editing task',
    created: new Date(),
    completed: false,
  },
  {
    id: 3,
    description: 'Active task',
    created: new Date(),
    completed: false,
  },
];
console.log(tasks);

function App() {
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={tasks} />

          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
