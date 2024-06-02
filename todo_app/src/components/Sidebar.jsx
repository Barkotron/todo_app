import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import SidebarTaskList from "./SidebarTaskList";

export default function Sidebar({
  activeTasks,
  completedTasks,
  handleAddTask,
  handleSelectTask,
}) {
  const [activeVisible, setActiveVisible] = useState(false);
  const [completedVisible, setCompletedVisible] = useState(false);

  function testAddItem() {
    handleAddTask({
      id: 5,
      title: "Some added Item",
      description: "Such description for NEW ITEM, wow!",
      date: "some NEW date, WOOWWW!!",
    });
  }

  return (
    <div className={styles.sidebar}>
      <button onClick={() => testAddItem()}>+ Add test task</button>
      <SidebarItem listLength={activeTasks.length} onClick={() => setActiveVisible(!activeVisible)}>
        Active Tasks
      </SidebarItem>
      {activeVisible && (
        <SidebarTaskList
          tasks={activeTasks}
          handleSelectTask={handleSelectTask}
        ></SidebarTaskList>
      )}
      <SidebarItem listLength={completedTasks.length} onClick={() => setCompletedVisible(!completedVisible)}>
        Completed Tasks
      </SidebarItem>
      {completedVisible && (
        <SidebarTaskList
          tasks={completedTasks}
          handleSelectTask={handleSelectTask}
        ></SidebarTaskList>
      )}
    </div>
  );
}
