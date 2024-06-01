import styles from "../styles/Sidebar.module.css";

export default function SidebarTaskList({ tasks, handleSelectTask }) {
  return (
    <div>
      <ul>
        {tasks.map((item) => (
          <li className={styles["sidebar-menu-subitem"]} key={item.title} onClick={() => handleSelectTask(item)}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
