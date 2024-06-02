import styles from "../styles/Sidebar.module.css";
export default function SidebarItem({ children, listLength, onClick }) {

  return (
    <button className={styles["sidebar-menu-item"]} onClick={onClick}>
      <div className={styles["sidebar-menu-item-children"]}>{children} ({listLength})</div>
    </button>
  );
}
