import styles from "../styles/Sidebar.module.css";
export default function SidebarItem({ children }) {

  return (
    <div className={styles["sidebar-menu-item"]}>
      <p>{children} ^</p>
    </div>
  );
}
