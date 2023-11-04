import { useState } from "react";
// COMPONENTS
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Waterpolo Match",
      day: "9 Dec, at 19:00 PM",
      reminder: true,
    },

    {
      id: 2,
      text: "School Meeting",
      day: "11 Dec, at 16:00 PM",
      reminder: false,
    },

    {
      id: 3,
      text: "Job Interview",
      day: "19 Dec, at 11:00 AM",
      reminder: true,
    },

    {
      id: 4,
      text: "Christmas Dinner",
      day: "25 Dec, at 18:00 PM",
      reminder: false,
    },
  ]);

  // DELETE ACTION
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : <h3>No tasks currently available</h3>}
    </div>
  );
}

export default App;
