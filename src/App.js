import { useState } from "react";
// COMPONENTS
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddForm from "./components/AddForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Waterpolo Match",
      date: "9 Dec, at 19:00 PM",
      reminder: true,
    },

    {
      id: 2,
      text: "School Meeting",
      date: "11 Dec, at 16:00 PM",
      reminder: false,
    },

    {
      id: 3,
      text: "Job Interview",
      date: "19 Dec, at 11:00 AM",
      reminder: true,
    },

    {
      id: 4,
      text: "Christmas Dinner",
      date: "25 Dec, at 18:00 PM",
      reminder: false,
    },
  ]);

  // ADD ACTION
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  // DELETE ACTION
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // REMINDER ACTION
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header showForm={() => setShowForm(!showForm)} show={showForm} />
      {showForm && <AddForm onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No tasks currently available</h3>
      )}
    </div>
  );
}

export default App;
