import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./styles/App.module.css";
import SelectedTask from "./components/SelectedTask";

import { ACTIVE_TASKS } from "./data/dummy_tasks";
import { COMPLETED_TASKS } from "./data/dummy_tasks";

function App() {
  const [activeTasks, setActiveTasks] = useState(ACTIVE_TASKS);
  const [completedTasks, setCompletedTasks] = useState(COMPLETED_TASKS);
  const [selectedTask, setSelectedTask] = useState(ACTIVE_TASKS[0]);

  function handleAddTask(task) {
    setActiveTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  }

  function handleRemoveTask(task) {
    //stub
    setActiveTasks((prevTasks) => prevTasks.filter((task) => true));
  }

  function handleSelectTask(task) {
    setSelectedTask(task);
  }

  //console.log("active", activeTasks);
  //console.log("completed", completedTasks);

  return (
    <div className={styles["app-wrapper"]}>
      <Header></Header>
      <div className={styles["flex-row"]}>
        <Sidebar
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          selectedTask={selectedTask}
          handleSelectTask={handleSelectTask}
          handleAddTask={handleAddTask}
        ></Sidebar>
        {selectedTask && <SelectedTask task={selectedTask}></SelectedTask>}
      </div>
    </div>
  );
}

export default App;
