import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import SidebarTaskList from "./SidebarTaskList";
import { motion, AnimatePresence } from "framer-motion";

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
      id: Math.random() * 10000,
      title: Math.floor(Math.random() * 1000),
      description: "Such description for NEW ITEM, wow!",
      date: "some NEW date, WOOWWW!!",
    });
  }

  return (
    <motion.div className={styles.sidebar}>
      <button onClick={() => testAddItem()}>+ Add test task</button>
      <SidebarItem
        listLength={activeTasks.length}
        onClick={() => setActiveVisible(!activeVisible)}
      >
        Active Tasks&nbsp;
      </SidebarItem>
      <AnimatePresence>
        {activeVisible && (
          <SidebarTaskList
            tasks={activeTasks}
            handleSelectTask={handleSelectTask}
          ></SidebarTaskList>
        )}
      </AnimatePresence>
      <SidebarItem
        listLength={completedTasks.length}
        onClick={() => setCompletedVisible(!completedVisible)}
      >
        Completed Tasks&nbsp;
      </SidebarItem>
      <AnimatePresence>
        {completedVisible && (
          <SidebarTaskList
            tasks={completedTasks}
            handleSelectTask={handleSelectTask}
          ></SidebarTaskList>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
