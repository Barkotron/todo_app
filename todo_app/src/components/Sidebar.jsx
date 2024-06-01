import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ activeTasks, completedTasks }) {
  console.log("sidebar got completed:", completedTasks);

  const [visible,setVisible] = useState(false);

  return (
    <div className={styles.sidebar}>
        <button onClick={() => setVisible(!visible)}>show lists</button>
      <SidebarItem taskList={activeTasks}>
        Active Tasks
      </SidebarItem>
      {visible && (
        <ul>
          {activeTasks.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      )}
      <SidebarItem taskList={completedTasks}>Completed Tasks</SidebarItem>
      {visible && (
        <ul>
          {completedTasks.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
