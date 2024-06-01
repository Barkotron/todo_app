import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./styles/App.module.css";

function App() {
  const [activeTasks, setActiveTasks] = useState([{id: 1, title: "test title active!"},{id: 2,title: "test title active 2!"}]);
  const [completedTasks, setCompletedTasks] = useState([{id: 3,title: "test title completed!"}, {id: 4,title: "test title completed 2!"}]);
  const [selectedTask, setSelectedTask] = useState(undefined);

  function handleAddTask(task) {
    setActiveTasks((prevTasks) => prevTasks.push(task));
  }

  function handleRemoveTask(task) {
    //stub
    setActiveTasks((prevTasks) => prevTasks.filter((task) => true));
  }

  function handleSelectTask() {}

  console.log("active", activeTasks);
  console.log("completed", completedTasks);

  return (
    <div className={styles["app-wrapper"]}>
      <Header></Header>
      <div className={styles["flex-row"]}>
        <Sidebar
          activeTasks={activeTasks}
          completedTasks={completedTasks}
        ></Sidebar>
        <p>TEST</p>
      </div>
    </div>
  );
}

export default App;
